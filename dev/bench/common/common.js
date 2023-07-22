// common.js

'use strict';

// Colors from https://github.com/github/linguist/blob/master/lib/linguist/languages.yml
const toolColors = {
    cargo: '#dea584',
    go: '#00add8',
    benchmarkjs: '#f1e05a',
    benchmarkluau: '#000080',
    pytest: '#3572a5',
    googlecpp: '#f34b7d',
    catch2: '#f34b7d',
    julia: '#a270ba',
    jmh: '#b07219',
    benchmarkdotnet: '#178600',
    customBiggerIsBetter: '#38ff38',
    customSmallerIsBetter: '#ff3838',
    _: '#333333'
};

function init() {
    function collectBenchesPerTestCase(entries) {
        const map = new Map();
        for (const entry of entries) {
            const {commit, date, tool, benches} = entry;
            for (const bench of benches) {
                const result = { commit, date, tool, bench };
                const arr = map.get(bench.name);
                if (arr === undefined) {
                    map.set(bench.name, [result]);
                } else {
                    arr.push(result);
                }
            }
        }
        return map;
    }

    const data = window.BENCHMARK_DATA;

    // Render header
    document.getElementById('last-update').textContent = new Date(data.lastUpdate).toString();
    const repoLink = document.getElementById('repository-link');
    repoLink.href = data.repoUrl;
    repoLink.textContent = data.repoUrl;

    // Render footer
    document.getElementById('dl-button').onclick = () => {
        const dataUrl = 'data:,' + JSON.stringify(data, null, 2);
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'benchmark_data.json';
        a.click();
    };

    // Prepare data points for charts
    return Object.keys(data.entries).map(name => ({
        name,
        dataSet: collectBenchesPerTestCase(data.entries[name]),
    }));
}

function renderAllChars(dataSets, platform) {
    function convertNsToS(value) {
        return (value / 1e9).toFixed(4);
    }

    function renderGraph(parent, name, dataset) {
        const canvas = document.createElement('canvas');
        canvas.className = 'benchmark-chart';
        parent.appendChild(canvas);

        const color = toolColors[dataset.length > 0 ? dataset[0].tool : '_'];
        if (dataset.length > 0 && dataset[0].bench.unit === 'ns/op') {
            name = name.replace('ns/op', 's/op')
        }
        const data = {
            labels: dataset.map(d => d.commit.timestamp.slice(0, 10) + " | " + d.commit.id.slice(0, 7)),
            datasets: [
                {
                    label: name,
                    data: dataset.map(d => (d.bench.unit === 'ns/op') ? convertNsToS(d.bench.value): d.bench.value),
                    borderColor: color,
                    backgroundColor: color + '60', // Add alpha for #rrggbbaa
                }
            ],
        };
        const options = {
            scales: {
                xAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: 'commit',
                        },
                    }
                ],
                yAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: dataset.length > 0 ? (dataset[0].bench.unit === 'ns/op' ? 's/op' : dataset[0].bench.unit) : '',
                        },
                        ticks: {
                            beginAtZero: true,
                        }
                    }
                ],
            },
            tooltips: {
                callbacks: {
                    afterTitle: items => {
                        const {index} = items[0];
                        const data = dataset[index];
                        return '\n' + data.commit.message + '\n\n' + data.commit.timestamp + ' committed by @' + data.commit.committer.username + '\n';
                    },
                    label: item => {
                        let label = item.value;
                        const { range, unit } = dataset[item.index].bench;
                        label += ' ' + (unit === 'ns/op' ? 's/op' : unit);
                        if (range) {
                            label += ' (' + range + ')';
                        }
                        return label;
                    },
                    afterLabel: item => {
                        const { extra } = dataset[item.index].bench;
                        return extra ? '\n' + extra : '';
                    }
                }
            },
            onClick: (_mouseEvent, activeElems) => {
                if (activeElems.length === 0) {
                    return;
                }
                // XXX: Undocumented. How can we know the index?
                const index = activeElems[0]._index;
                const url = dataset[index].commit.url;
                window.open(url, '_blank');
            },
        };

        new Chart(canvas, {
            type: 'line',
            data,
            options,
        });
    }

    function renderBenchSet(name, platform, benchSet, main) {
        const setElem = document.createElement('div');
        setElem.className = 'benchmark-set';
        main.appendChild(setElem);

        const nameElem = document.createElement('h1');
        nameElem.className = 'benchmark-title';
        nameElem.textContent = name + '-' + platform;
        setElem.appendChild(nameElem);

        const graphsElem = document.createElement('div');
        graphsElem.className = 'benchmark-graphs';
        setElem.appendChild(graphsElem);

        for (const [benchName, benches] of benchSet.entries()) {
            renderGraph(graphsElem, benchName, benches)
        }
    }

    const main = document.getElementById('main');
    for (const {name, dataSet} of dataSets) {
        renderBenchSet(name, platform, dataSet, main);
    }
}
