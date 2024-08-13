# Changelog

## [1.2.3](https://github.com/runfinch/finch/compare/v1.2.2...v1.2.3) (2024-08-13)


### Build System or External Dependencies

* **deps:** bump github.com/aws/aws-sdk-go-v2 from 1.30.1 to 1.30.3 ([#1028](https://github.com/runfinch/finch/issues/1028)) ([dcb3865](https://github.com/runfinch/finch/commit/dcb38650fa4c0038cabecb3fb17b3c8b03ca63a3))
* **deps:** bump github.com/docker/cli from 27.0.3+incompatible to 27.1.0+incompatible ([#1041](https://github.com/runfinch/finch/issues/1041)) ([187dd56](https://github.com/runfinch/finch/commit/187dd5659b0a1f9a9644bcbb6bac6cd972a5d698))
* **deps:** bump github.com/docker/cli from 27.1.0+incompatible to 27.1.1+incompatible ([#1045](https://github.com/runfinch/finch/issues/1045)) ([9e9dec8](https://github.com/runfinch/finch/commit/9e9dec89b3c58c2c3f36ac5c7f026cdddc510734))
* **deps:** bump github.com/docker/docker from 27.0.3+incompatible to 27.1.0+incompatible ([#1042](https://github.com/runfinch/finch/issues/1042)) ([942b639](https://github.com/runfinch/finch/commit/942b639659f35f43cb740d81c30e46f85b6d0912))
* **deps:** bump github.com/docker/docker from 27.1.0+incompatible to 27.1.1+incompatible ([#1044](https://github.com/runfinch/finch/issues/1044)) ([d33cb5d](https://github.com/runfinch/finch/commit/d33cb5d7fb31218fc001bec8d58c8224852622b3))
* **deps:** bump github.com/onsi/ginkgo/v2 from 2.19.0 to 2.19.1 ([#1046](https://github.com/runfinch/finch/issues/1046)) ([39bba35](https://github.com/runfinch/finch/commit/39bba35ddfb75d02bacdfac36bb3fffb511dc273))
* **deps:** bump github.com/onsi/ginkgo/v2 from 2.19.1 to 2.20.0 ([#1057](https://github.com/runfinch/finch/issues/1057)) ([221a935](https://github.com/runfinch/finch/commit/221a935a28ac72b7365633abf88d93940d40e285))
* **deps:** bump github.com/onsi/gomega from 1.33.1 to 1.34.1 ([#1048](https://github.com/runfinch/finch/issues/1048)) ([66ceee4](https://github.com/runfinch/finch/commit/66ceee43089998266812efdc759fd4b57c504bde))
* **deps:** bump golang.org/x/crypto from 0.25.0 to 0.26.0 ([#1054](https://github.com/runfinch/finch/issues/1054)) ([2ecab35](https://github.com/runfinch/finch/commit/2ecab35866f2f3d99ba3cf32d6b3f337341cce20))
* **deps:** bump golang.org/x/sys from 0.22.0 to 0.23.0 ([#1051](https://github.com/runfinch/finch/issues/1051)) ([c6402ab](https://github.com/runfinch/finch/commit/c6402ab9471419ed37a744950a38447e155470d2))
* **deps:** bump golang.org/x/sys from 0.23.0 to 0.24.0 ([#1059](https://github.com/runfinch/finch/issues/1059)) ([9529346](https://github.com/runfinch/finch/commit/9529346e95c48056c71ee7e09cd6ce10044044f8))
* **deps:** bump golang.org/x/tools from 0.23.0 to 0.24.0 ([#1056](https://github.com/runfinch/finch/issues/1056)) ([3a34c79](https://github.com/runfinch/finch/commit/3a34c79996f49a3eb609615c02b5fe4bdbb266fc))
* **deps:** bump k8s.io/apimachinery from 0.30.2 to 0.30.3 ([#1036](https://github.com/runfinch/finch/issues/1036)) ([0c5686e](https://github.com/runfinch/finch/commit/0c5686e86fffde80f7428036aa443fc6629694ae))
* **deps:** Bump submodules and dependencies ([#1027](https://github.com/runfinch/finch/issues/1027)) ([966b8d2](https://github.com/runfinch/finch/commit/966b8d2e5e189dc89d5e1a07beed42cb0de26363))
* **deps:** Bump submodules and dependencies ([#1035](https://github.com/runfinch/finch/issues/1035)) ([4fe6fcf](https://github.com/runfinch/finch/commit/4fe6fcfca0da292521929033f7067e309ec32971))
* **fix:** pass arch to finch-core install.dependencies target ([#1034](https://github.com/runfinch/finch/issues/1034)) ([fa5078f](https://github.com/runfinch/finch/commit/fa5078f2d5f2fcc12b039fe37331cfb18b191f09))


### Bug Fixes

* remove llvm copy to fix build errors ([#1030](https://github.com/runfinch/finch/issues/1030)) ([5104857](https://github.com/runfinch/finch/commit/51048575d4c325fb215c8e1a1a226052c473d3d2))
* typo causing error while downloading license ([#1033](https://github.com/runfinch/finch/issues/1033)) ([2452614](https://github.com/runfinch/finch/commit/2452614189f1b41ba32f7824e6874716418c3028))

## [1.2.2](https://github.com/runfinch/finch/compare/v1.2.1...v1.2.2) (2024-07-09)


### Build System or External Dependencies

* **deps:** bump github.com/aws/aws-sdk-go-v2 from 1.30.0 to 1.30.1 ([#1004](https://github.com/runfinch/finch/issues/1004)) ([0174b05](https://github.com/runfinch/finch/commit/0174b05a2cc39971ee45fd92270cb268a918b57b))
* **deps:** bump golang.org/x/crypto from 0.24.0 to 0.25.0 ([#1016](https://github.com/runfinch/finch/issues/1016)) ([b7c711a](https://github.com/runfinch/finch/commit/b7c711abe4831342dcd3347ce658b9c301d4e191))
* **deps:** bump golang.org/x/tools from 0.22.0 to 0.23.0 ([#1019](https://github.com/runfinch/finch/issues/1019)) ([81b2446](https://github.com/runfinch/finch/commit/81b2446a3a9f4d13364951e26c2f716a0ab956f7))
* **deps:** Bump submodules and dependencies ([#1020](https://github.com/runfinch/finch/issues/1020)) ([30d8e69](https://github.com/runfinch/finch/commit/30d8e69d17d5c5989ee40c4f71c17821ba58c973))
* **deps:** Bump submodules and dependencies ([#1021](https://github.com/runfinch/finch/issues/1021)) ([fd1677b](https://github.com/runfinch/finch/commit/fd1677b4ca6ddf74f3733812a317305e956ee7bb))

## [1.2.1](https://github.com/runfinch/finch/compare/v1.2.0...v1.2.1) (2024-07-02)


### Build System or External Dependencies

* **deps:** Bump github.com/aws/aws-sdk-go-v2 from 1.27.0 to 1.27.1 ([#963](https://github.com/runfinch/finch/issues/963)) ([4c2dc12](https://github.com/runfinch/finch/commit/4c2dc1220c51990ebd3f96b973d05e30122a4b8d))
* **deps:** Bump github.com/aws/aws-sdk-go-v2 from 1.27.1 to 1.27.2 ([#974](https://github.com/runfinch/finch/issues/974)) ([54aa67c](https://github.com/runfinch/finch/commit/54aa67cd50a9f02122f6c4af15e6299aeb56f833))
* **deps:** bump github.com/aws/aws-sdk-go-v2 from 1.27.2 to 1.30.0 ([#991](https://github.com/runfinch/finch/issues/991)) ([bbcb8e7](https://github.com/runfinch/finch/commit/bbcb8e7fdc518eddeb64d1b6f0b59931a0f8450f))
* **deps:** Bump github.com/docker/cli from 26.1.3+incompatible to 26.1.4+incompatible ([#973](https://github.com/runfinch/finch/issues/973)) ([f774e2d](https://github.com/runfinch/finch/commit/f774e2d7316da5bb1a29f12ed58ba1ebd08f5a6c))
* **deps:** bump github.com/docker/cli from 26.1.4+incompatible to 27.0.2+incompatible ([#999](https://github.com/runfinch/finch/issues/999)) ([0244698](https://github.com/runfinch/finch/commit/0244698ebe15f215941a875692246ba5c81cbdea))
* **deps:** bump github.com/docker/cli from 27.0.2+incompatible to 27.0.3+incompatible ([#1005](https://github.com/runfinch/finch/issues/1005)) ([c801e69](https://github.com/runfinch/finch/commit/c801e690330dd44b9e5501dad529543d88849ab2))
* **deps:** Bump github.com/docker/docker from 26.1.3+incompatible to 26.1.4+incompatible ([#972](https://github.com/runfinch/finch/issues/972)) ([05b9c05](https://github.com/runfinch/finch/commit/05b9c0506b7c482b916445a4e53664846c5c45b6))
* **deps:** bump github.com/docker/docker from 26.1.4+incompatible to 27.0.1+incompatible ([#996](https://github.com/runfinch/finch/issues/996)) ([1f68260](https://github.com/runfinch/finch/commit/1f682607bb5430cf88ea50c5c5ba3d4f5299ccc0))
* **deps:** bump github.com/docker/docker from 27.0.1+incompatible to 27.0.2+incompatible ([#1001](https://github.com/runfinch/finch/issues/1001)) ([50a639b](https://github.com/runfinch/finch/commit/50a639b4ea9c9c1c59a67ed6a26902aae5b01abe))
* **deps:** bump github.com/docker/docker from 27.0.2+incompatible to 27.0.3+incompatible ([#1006](https://github.com/runfinch/finch/issues/1006)) ([537abad](https://github.com/runfinch/finch/commit/537abadac3acc3e51d81f13e584c6d4e234cd654))
* **deps:** bump github.com/spf13/cobra from 1.8.0 to 1.8.1 ([#983](https://github.com/runfinch/finch/issues/983)) ([7b2bed6](https://github.com/runfinch/finch/commit/7b2bed648eae4cb915514981da777b9df7729f88))
* **deps:** bump golang.org/x/image from 0.12.0 to 0.18.0 ([#998](https://github.com/runfinch/finch/issues/998)) ([398658e](https://github.com/runfinch/finch/commit/398658eaff3299d6edf705f922ce1f1732d974cb))
* **deps:** Bump golang.org/x/text from 0.15.0 to 0.16.0 ([#964](https://github.com/runfinch/finch/issues/964)) ([8a3973a](https://github.com/runfinch/finch/commit/8a3973a4d08e3ed7b33fde4d94a2717126042618))
* **deps:** Bump golang.org/x/tools from 0.21.0 to 0.22.0 ([#967](https://github.com/runfinch/finch/issues/967)) ([3921b00](https://github.com/runfinch/finch/commit/3921b00807455aacaeb526fe7db8da2f68a81fd3))
* **deps:** bump k8s.io/apimachinery from 0.30.1 to 0.30.2 ([#981](https://github.com/runfinch/finch/issues/981)) ([c8ebf20](https://github.com/runfinch/finch/commit/c8ebf20285afdc23684866e69ef955021260bcc9))
* **deps:** Bump submodules and dependencies ([#1008](https://github.com/runfinch/finch/issues/1008)) ([6134a5a](https://github.com/runfinch/finch/commit/6134a5aa96ae424c64101fe91814ca2dcef21555))
* **deps:** Bump submodules and dependencies ([#949](https://github.com/runfinch/finch/issues/949)) ([b5ee424](https://github.com/runfinch/finch/commit/b5ee42460f58f9ee96b3ae0b908349a04662d20b))


### Bug Fixes

* add SOCI snapshotter hash check ([#985](https://github.com/runfinch/finch/issues/985)) ([563f346](https://github.com/runfinch/finch/commit/563f346fa1b5380576213175055e308500a0cdbb))
* Allow to use the COMPOSE_FILE variable in finch compose ([#994](https://github.com/runfinch/finch/issues/994)) ([17d4bc8](https://github.com/runfinch/finch/commit/17d4bc8fbdf6b80e5070d2aa3ed1c85b112252fb))
* Enable `finch support-bundle generate` to execute on Windows whe… ([#976](https://github.com/runfinch/finch/issues/976)) ([9c1caf0](https://github.com/runfinch/finch/commit/9c1caf0af243cc925f51e24abc59ed29172ddd21))
* update snapshotters reference ([#986](https://github.com/runfinch/finch/issues/986)) ([06b9027](https://github.com/runfinch/finch/commit/06b9027d7194a6b8d7cc32f8bc40988fcde5a64a))
* verify shasum for finch dependencies ([#969](https://github.com/runfinch/finch/issues/969)) ([9d85f25](https://github.com/runfinch/finch/commit/9d85f25c2026032122c05d54fdcf6dcb4031ea86))

## [1.2.0](https://github.com/runfinch/finch/compare/v1.1.3...v1.2.0) (2024-06-03)


### Build System or External Dependencies

* **deps:** Bump github.com/aws/aws-sdk-go-v2 from 1.26.0 to 1.26.1 ([#882](https://github.com/runfinch/finch/issues/882)) ([c059d9e](https://github.com/runfinch/finch/commit/c059d9ec3c4c17ba950bc25a9bb33a2b6c39394e))
* **deps:** Bump github.com/aws/aws-sdk-go-v2 from 1.26.1 to 1.27.0 ([#954](https://github.com/runfinch/finch/issues/954)) ([b06280c](https://github.com/runfinch/finch/commit/b06280cfcd70cfd38a7d7d7aa911aab3469c2e67))
* **deps:** Bump github.com/docker/cli from 26.0.0+incompatible to 26.0.1+incompatible ([#894](https://github.com/runfinch/finch/issues/894)) ([680e23f](https://github.com/runfinch/finch/commit/680e23fd5b5406855c65821029d94f777cdacb28))
* **deps:** Bump github.com/docker/cli from 26.0.1+incompatible to 26.0.2+incompatible ([#906](https://github.com/runfinch/finch/issues/906)) ([6fc6ce5](https://github.com/runfinch/finch/commit/6fc6ce5918454f18037733ac9dcc0b9a3e8798af))
* **deps:** Bump github.com/docker/cli from 26.0.2+incompatible to 26.1.0+incompatible ([#913](https://github.com/runfinch/finch/issues/913)) ([bfeb585](https://github.com/runfinch/finch/commit/bfeb585d599959b1af636beb11267dd52ab39c3e))
* **deps:** Bump github.com/docker/cli from 26.1.0+incompatible to 26.1.1+incompatible ([#922](https://github.com/runfinch/finch/issues/922)) ([7b6b3d2](https://github.com/runfinch/finch/commit/7b6b3d24467b1becb0c8c9c6d44815ef6e62910b))
* **deps:** Bump github.com/docker/cli from 26.1.1+incompatible to 26.1.2+incompatible ([#941](https://github.com/runfinch/finch/issues/941)) ([eec3462](https://github.com/runfinch/finch/commit/eec346241518140706129755e6b546394006f3f5))
* **deps:** Bump github.com/docker/cli from 26.1.2+incompatible to 26.1.3+incompatible ([#952](https://github.com/runfinch/finch/issues/952)) ([9a94c57](https://github.com/runfinch/finch/commit/9a94c57cf8d966f42d8ec8510bac5617e292f7ec))
* **deps:** Bump github.com/docker/docker from 26.0.0+incompatible to 26.0.1+incompatible ([#892](https://github.com/runfinch/finch/issues/892)) ([05610c1](https://github.com/runfinch/finch/commit/05610c1b70d884fdbaf74c467e090ddcadd100e9))
* **deps:** Bump github.com/docker/docker from 26.0.1+incompatible to 26.0.2+incompatible ([#905](https://github.com/runfinch/finch/issues/905)) ([69e7d0b](https://github.com/runfinch/finch/commit/69e7d0b153c60653a4f0299c66bb984c39f6434b))
* **deps:** Bump github.com/docker/docker from 26.0.2+incompatible to 26.1.0+incompatible ([#912](https://github.com/runfinch/finch/issues/912)) ([5e5f8a8](https://github.com/runfinch/finch/commit/5e5f8a83aaaa9602e7e22ef48ea4f93be1bfe3c3))
* **deps:** Bump github.com/docker/docker from 26.1.0+incompatible to 26.1.1+incompatible ([#924](https://github.com/runfinch/finch/issues/924)) ([79eb863](https://github.com/runfinch/finch/commit/79eb86318039016e184fdad7c24ebc95c25b73b0))
* **deps:** Bump github.com/docker/docker from 26.1.1+incompatible to 26.1.2+incompatible ([#940](https://github.com/runfinch/finch/issues/940)) ([aa3ab01](https://github.com/runfinch/finch/commit/aa3ab0129bfba62fbaf8ef82cb45b971fcd555c6))
* **deps:** Bump github.com/docker/docker from 26.1.2+incompatible to 26.1.3+incompatible ([#951](https://github.com/runfinch/finch/issues/951)) ([cef9d8f](https://github.com/runfinch/finch/commit/cef9d8fdc335f9a7d762fb260f84056217f2d7d0))
* **deps:** Bump github.com/lima-vm/lima from 0.21.0 to 0.22.0 ([#934](https://github.com/runfinch/finch/issues/934)) ([62d67d5](https://github.com/runfinch/finch/commit/62d67d5cd3a069eeee209a9c854afa3b98165975))
* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.17.1 to 2.17.2 ([#920](https://github.com/runfinch/finch/issues/920)) ([939639e](https://github.com/runfinch/finch/commit/939639edd7cea38a05ce139d49b5f1b5c4305a1f))
* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.17.2 to 2.17.3 ([#933](https://github.com/runfinch/finch/issues/933)) ([c56019d](https://github.com/runfinch/finch/commit/c56019d4d0d9e0479b7580d72beff1ae677c7c09))
* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.17.3 to 2.19.0 ([#959](https://github.com/runfinch/finch/issues/959)) ([08d7a34](https://github.com/runfinch/finch/commit/08d7a3406106838cf3cad9f27f27f5aba5fef507))
* **deps:** Bump github.com/onsi/gomega from 1.33.0 to 1.33.1 ([#923](https://github.com/runfinch/finch/issues/923)) ([e7f4e0d](https://github.com/runfinch/finch/commit/e7f4e0db0e7e5e4bb246c7b503f51dc59e392d55))
* **deps:** Bump github.com/runfinch/common-tests from 0.7.18 to 0.7.21 ([#878](https://github.com/runfinch/finch/issues/878)) ([e1cbd0a](https://github.com/runfinch/finch/commit/e1cbd0a466468eae01b60e3eb30bc3205a551ed4))
* **deps:** Bump github.com/runfinch/common-tests from 0.7.21 to 0.7.22 ([#907](https://github.com/runfinch/finch/issues/907)) ([84b4a69](https://github.com/runfinch/finch/commit/84b4a692fc81bdf28ed215322b2b8f90ca556976))
* **deps:** Bump github.com/shirou/gopsutil/v3 from 3.24.2 to 3.24.3 ([#881](https://github.com/runfinch/finch/issues/881)) ([465e369](https://github.com/runfinch/finch/commit/465e369479fb803dde75be02ee4a8e37c3a3ffdf))
* **deps:** Bump github.com/shirou/gopsutil/v3 from 3.24.3 to 3.24.4 ([#925](https://github.com/runfinch/finch/issues/925)) ([8cd5643](https://github.com/runfinch/finch/commit/8cd5643b13adeac92ead09d45e8d890bb99d01a8))
* **deps:** Bump github.com/shirou/gopsutil/v3 from 3.24.4 to 3.24.5 ([#962](https://github.com/runfinch/finch/issues/962)) ([8e51db3](https://github.com/runfinch/finch/commit/8e51db3c0d622d850ffd7e8d38b9e846ff586e95))
* **deps:** Bump github.com/tc-hib/go-winres from 0.3.1 to 0.3.3 ([#893](https://github.com/runfinch/finch/issues/893)) ([ebb4c9f](https://github.com/runfinch/finch/commit/ebb4c9f5a40a003aebefa765de971835c461c3d2))
* **deps:** Bump golang.org/x/crypto from 0.22.0 to 0.23.0 ([#928](https://github.com/runfinch/finch/issues/928)) ([1687293](https://github.com/runfinch/finch/commit/16872932c1345d5894a2d5c859f0fbcdc756ff35))
* **deps:** Bump golang.org/x/text from 0.14.0 to 0.15.0 ([#929](https://github.com/runfinch/finch/issues/929)) ([85e1bec](https://github.com/runfinch/finch/commit/85e1becd9a1c4a1396c8611dab74ec36d41d10eb))
* **deps:** Bump golang.org/x/tools from 0.19.0 to 0.20.0 ([#889](https://github.com/runfinch/finch/issues/889)) ([cfac010](https://github.com/runfinch/finch/commit/cfac010837e0dac39c02fd6ba5154760641074fb))
* **deps:** Bump golang.org/x/tools from 0.20.0 to 0.21.0 ([#932](https://github.com/runfinch/finch/issues/932)) ([a853a8a](https://github.com/runfinch/finch/commit/a853a8a968ff13524521bd0e201640680e5b8e47))
* **deps:** Bump k8s.io/apimachinery from 0.29.3 to 0.30.0 ([#904](https://github.com/runfinch/finch/issues/904)) ([f8b7f25](https://github.com/runfinch/finch/commit/f8b7f254a67413111dc1de70255a28ffab49d62a))
* **deps:** Bump k8s.io/apimachinery from 0.30.0 to 0.30.1 ([#946](https://github.com/runfinch/finch/issues/946)) ([dc4ebf9](https://github.com/runfinch/finch/commit/dc4ebf92931fe9b44466a6a1a60daa11183fe53d))
* **deps:** Bump submodules and dependencies ([#874](https://github.com/runfinch/finch/issues/874)) ([a9f73be](https://github.com/runfinch/finch/commit/a9f73be25a32b9f0d96fe79f92ae02050694fc47))
* **deps:** Bump submodules and dependencies ([#895](https://github.com/runfinch/finch/issues/895)) ([c7388bb](https://github.com/runfinch/finch/commit/c7388bb9638d0c2306efc9dc6c4f11996d6f11bb))
* unify macos/windows yamls ([#921](https://github.com/runfinch/finch/issues/921)) ([86d9a23](https://github.com/runfinch/finch/commit/86d9a231a9c454bcde220c7a72b122c64df21fdd))


### Features

* Add the --format option to the finch version command ([#926](https://github.com/runfinch/finch/issues/926)) ([a9d04e3](https://github.com/runfinch/finch/commit/a9d04e35515bedb970f403a732377ddf3ce6df18))
* make Virtualization Framework default ([#956](https://github.com/runfinch/finch/issues/956)) ([75b69b8](https://github.com/runfinch/finch/commit/75b69b8a79d51c71d21fbddec15e5593c717edcf))


### Bug Fixes

* add finch vm settings subcommand ([#887](https://github.com/runfinch/finch/issues/887)) ([8e809cc](https://github.com/runfinch/finch/commit/8e809cce3c4032b145682da724308782acc74ad1))
* Remove unnecessary error handling ([#961](https://github.com/runfinch/finch/issues/961)) ([f441fc9](https://github.com/runfinch/finch/commit/f441fc9767d75ad893277a86cd846e7bfbb33a77))

## [1.1.3](https://github.com/runfinch/finch/compare/v1.1.2...v1.1.3) (2024-03-28)


### Build System or External Dependencies

* **deps:** Bump github.com/aws/aws-sdk-go-v2 from 1.25.0 to 1.25.2 ([#831](https://github.com/runfinch/finch/issues/831)) ([9eb8097](https://github.com/runfinch/finch/commit/9eb80975c7490394d5af082b2738dda7d3090fe1))
* **deps:** Bump github.com/aws/aws-sdk-go-v2 from 1.25.2 to 1.25.3 ([#856](https://github.com/runfinch/finch/issues/856)) ([e9314f0](https://github.com/runfinch/finch/commit/e9314f0e5de309d95e51878a655eceec1e319141))
* **deps:** Bump github.com/aws/aws-sdk-go-v2 from 1.25.3 to 1.26.0 ([#864](https://github.com/runfinch/finch/issues/864)) ([9223219](https://github.com/runfinch/finch/commit/922321930a61affd08697aba50c77931cae84ce6))
* **deps:** Bump github.com/docker/cli from 25.0.3+incompatible to 25.0.4+incompatible ([#857](https://github.com/runfinch/finch/issues/857)) ([838fc07](https://github.com/runfinch/finch/commit/838fc07ee4ec22977606a28ea36b267788ace94d))
* **deps:** Bump github.com/docker/cli from 25.0.4+incompatible to 26.0.0+incompatible ([#867](https://github.com/runfinch/finch/issues/867)) ([4167d3d](https://github.com/runfinch/finch/commit/4167d3dd61865b22bca9e7c54f839ba1d90138bf))
* **deps:** Bump github.com/docker/docker from 25.0.3+incompatible to 25.0.4+incompatible ([#845](https://github.com/runfinch/finch/issues/845)) ([769ae32](https://github.com/runfinch/finch/commit/769ae321828eb5842943a2bf503297543551bdfe))
* **deps:** Bump github.com/docker/docker from 25.0.4+incompatible to 26.0.0+incompatible ([#866](https://github.com/runfinch/finch/issues/866)) ([7fa6e72](https://github.com/runfinch/finch/commit/7fa6e72fb8d62f16b88deb6dbd7b09aaaa1acdac))
* **deps:** Bump github.com/lima-vm/lima from 0.20.1 to 0.20.2 ([#855](https://github.com/runfinch/finch/issues/855)) ([99d4c3c](https://github.com/runfinch/finch/commit/99d4c3cd8d1623b70c859077fbe7e07a69cf9853))
* **deps:** Bump github.com/lima-vm/lima from 0.20.2 to 0.21.0 ([#862](https://github.com/runfinch/finch/issues/862)) ([120ffcc](https://github.com/runfinch/finch/commit/120ffccf2bb85fa0f5dd1c8907e9f8ecc70eb416))
* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.15.0 to 2.16.0 ([#842](https://github.com/runfinch/finch/issues/842)) ([8e04421](https://github.com/runfinch/finch/commit/8e044217f97b9fe8b4557e5770eb2b383768c413))
* **deps:** Bump github.com/onsi/gomega from 1.31.1 to 1.32.0 ([#860](https://github.com/runfinch/finch/issues/860)) ([b2c9449](https://github.com/runfinch/finch/commit/b2c94497ec1c950dfe909265f13d70c8c0f8fed9))
* **deps:** Bump github.com/runfinch/common-tests from 0.7.13 to 0.7.14 ([#834](https://github.com/runfinch/finch/issues/834)) ([2287575](https://github.com/runfinch/finch/commit/22875751324666cb68f6ef928b9960b8fb9ede08))
* **deps:** Bump github.com/shirou/gopsutil/v3 from 3.24.1 to 3.24.2 ([#838](https://github.com/runfinch/finch/issues/838)) ([d2612aa](https://github.com/runfinch/finch/commit/d2612aa7683e93213e0ba5f9e082afb343ddcaf2))
* **deps:** Bump github.com/stretchr/testify from 1.8.4 to 1.9.0 ([#839](https://github.com/runfinch/finch/issues/839)) ([9f0953d](https://github.com/runfinch/finch/commit/9f0953d260c806b4b243472ddce14284b2051a3e))
* **deps:** Bump golang.org/x/crypto from 0.19.0 to 0.20.0 ([#833](https://github.com/runfinch/finch/issues/833)) ([1ed1474](https://github.com/runfinch/finch/commit/1ed1474fa7eaca97e32a7641da76ca96e5d300d1))
* **deps:** Bump golang.org/x/crypto from 0.20.0 to 0.21.0 ([#843](https://github.com/runfinch/finch/issues/843)) ([b7ef6f2](https://github.com/runfinch/finch/commit/b7ef6f2a946b1a813dd5846e4ea8726a1442b332))
* **deps:** Bump golang.org/x/tools from 0.18.0 to 0.19.0 ([#844](https://github.com/runfinch/finch/issues/844)) ([f8883b2](https://github.com/runfinch/finch/commit/f8883b2535e9fb655eaf86f0765e4f46d5d83b0a))
* **deps:** Bump google.golang.org/protobuf from 1.32.0 to 1.33.0 ([#858](https://github.com/runfinch/finch/issues/858)) ([14532d5](https://github.com/runfinch/finch/commit/14532d599ce17767d8e9ccb2ca3450621e719cc7))
* **deps:** Bump k8s.io/apimachinery from 0.29.2 to 0.29.3 ([#863](https://github.com/runfinch/finch/issues/863)) ([c8a4262](https://github.com/runfinch/finch/commit/c8a42626538ec3fe301158b5b0f995b84f38a95b))
* **deps:** Bump submodules and dependencies ([#825](https://github.com/runfinch/finch/issues/825)) ([8828c56](https://github.com/runfinch/finch/commit/8828c56251ea792efb9b8fccc8eadec374b30c62))


### Bug Fixes

* parse management commands with proper arguments ([#876](https://github.com/runfinch/finch/issues/876)) ([e2f42fe](https://github.com/runfinch/finch/commit/e2f42fe243ca41fd9d0fcb8db9b06d30d95b283e))
* Reset disks and force remove vm after suite execution ([#846](https://github.com/runfinch/finch/issues/846)) ([c2363b1](https://github.com/runfinch/finch/commit/c2363b18dc9531d81898dbbce131d13205e40017))

## [1.1.2](https://github.com/runfinch/finch/compare/v1.1.1...v1.1.2) (2024-02-20)


### Build System or External Dependencies

* **deps:** Bump github.com/docker/docker from 25.0.1+incompatible to 25.0.3+incompatible ([#799](https://github.com/runfinch/finch/issues/799)) ([d761301](https://github.com/runfinch/finch/commit/d7613012551bd47c26476a993a35856aab91511c))
* **deps:** Bump github.com/goccy/go-yaml from 1.11.2 to 1.11.3 ([#780](https://github.com/runfinch/finch/issues/780)) ([2e616ff](https://github.com/runfinch/finch/commit/2e616ff18d68931f0da81a04045960f035568322))
* **deps:** Bump github.com/shirou/gopsutil/v3 from 3.23.12 to 3.24.1 ([#787](https://github.com/runfinch/finch/issues/787)) ([55f6d92](https://github.com/runfinch/finch/commit/55f6d929949c1f776a63b93ea4a4446cc821e74a))
* **deps:** Bump golang.org/x/crypto from 0.18.0 to 0.19.0 ([#806](https://github.com/runfinch/finch/issues/806)) ([3fbc87c](https://github.com/runfinch/finch/commit/3fbc87ce7e6a07a789674a52fb79f968db267951))
* **deps:** Bump golang.org/x/tools from 0.17.0 to 0.18.0 ([#807](https://github.com/runfinch/finch/issues/807)) ([7323751](https://github.com/runfinch/finch/commit/7323751937900df76b217736acc51d77b9cff3d9))
* **deps:** Bump k8s.io/apimachinery from 0.29.1 to 0.29.2 ([#820](https://github.com/runfinch/finch/issues/820)) ([6ca0f7f](https://github.com/runfinch/finch/commit/6ca0f7ff007f88ad37eb02b2c9437042a7350f37))
* **deps:** Bump submodules and dependencies ([#795](https://github.com/runfinch/finch/issues/795)) ([ec77f1a](https://github.com/runfinch/finch/commit/ec77f1abe9c00ddd9cd84ed665204c2c5df4c40b))
* **deps:** Bump submodules and dependencies ([#805](https://github.com/runfinch/finch/issues/805)) ([0bf9148](https://github.com/runfinch/finch/commit/0bf9148a6ce88dde413679cc9a3702a5d398d544))


### Bug Fixes

* Correct typo in type name of struct (NerdctlClientOuput) ([#743](https://github.com/runfinch/finch/issues/743)) ([13de2b9](https://github.com/runfinch/finch/commit/13de2b99fcd6f952beda9f75e6f3660974a815d0))
* Env variable CONTAINERD_SNAPSHOTTER cleared on overlayfs and ref… ([#816](https://github.com/runfinch/finch/issues/816)) ([d222a34](https://github.com/runfinch/finch/commit/d222a347632f9898ed223a122c97d3a973bde3a5))
* msi release tests cleanup ([#819](https://github.com/runfinch/finch/issues/819)) ([0f23660](https://github.com/runfinch/finch/commit/0f236609429534bab3057971e6126cf9b3ff47fc))
* stop Finch on uninstall ([#818](https://github.com/runfinch/finch/issues/818)) ([a96788b](https://github.com/runfinch/finch/commit/a96788bbce5e9a6af805650a1c21d1c60e04fa68))
* **windows-installer:** add new cleanup script on install ([#824](https://github.com/runfinch/finch/issues/824)) ([fccfa1d](https://github.com/runfinch/finch/commit/fccfa1dd5773242039254e067dcde0cd9fd4fe5e))
* **windows-installer:** ignore FilesInUse/Restart dialogue ([#823](https://github.com/runfinch/finch/issues/823)) ([f64835d](https://github.com/runfinch/finch/commit/f64835d6b7d473eda434cbb932d3c049cac6a5d5))
* **windows-installer:** uninstall script behavior ([#822](https://github.com/runfinch/finch/issues/822)) ([ace37ea](https://github.com/runfinch/finch/commit/ace37eaf48fca613f692e7a08b182d268fc60555))


### Reverts

* "always force stop when using Virtualization.framework" ([#370](https://github.com/runfinch/finch/issues/370)) ([cb3051e](https://github.com/runfinch/finch/commit/cb3051e60d80aabce550377696d4251c9a9b0eec))

## [1.1.1](https://github.com/runfinch/finch/compare/v1.1.0...v1.1.1) (2024-02-01)


### Build System or External Dependencies

* **deps:** Bump submodules and dependencies ([#762](https://github.com/runfinch/finch/issues/762)) ([4889527](https://github.com/runfinch/finch/commit/4889527dae6494509fce0b3fefc4ac890d113f11))


### Bug Fixes

* add force to cni cleanup on boot service ([#785](https://github.com/runfinch/finch/issues/785)) ([9b2438b](https://github.com/runfinch/finch/commit/9b2438b5827706b134bb791a78643af37854b377))

## [1.1.0](https://github.com/runfinch/finch/compare/v1.0.1...v1.1.0) (2024-01-31)


### Build System or External Dependencies

* **deps:** Bump github.com/aws/aws-sdk-go-v2 from 1.24.0 to 1.24.1 ([#749](https://github.com/runfinch/finch/issues/749)) ([c3ae967](https://github.com/runfinch/finch/commit/c3ae96794165b4ea696bb94856d40ff91767ed1b))
* **deps:** Bump github.com/containerd/containerd from 1.7.10 to 1.7.11 ([#742](https://github.com/runfinch/finch/issues/742)) ([7d1e250](https://github.com/runfinch/finch/commit/7d1e25068a503a8b4ea7dd3f349ff4020168a6fb))
* **deps:** Bump github.com/docker/docker from 24.0.7+incompatible to 25.0.1+incompatible ([#772](https://github.com/runfinch/finch/issues/772)) ([b16f6ae](https://github.com/runfinch/finch/commit/b16f6aeb31473ce2e49550827d7a1974fd719e0d))
* **deps:** Bump github.com/lima-vm/lima from 0.19.0 to 0.20.0 ([#769](https://github.com/runfinch/finch/issues/769)) ([7f0c86e](https://github.com/runfinch/finch/commit/7f0c86e208a2d6faf3a93ed72887a7211fb9aa9f))
* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.13.2 to 2.14.0 ([#758](https://github.com/runfinch/finch/issues/758)) ([7d3a7c8](https://github.com/runfinch/finch/commit/7d3a7c84b02d70edad7947573f77dada22332f41))
* **deps:** Bump github.com/onsi/gomega from 1.30.0 to 1.31.1 ([#768](https://github.com/runfinch/finch/issues/768)) ([889abf8](https://github.com/runfinch/finch/commit/889abf8d7b8fa795790e509cbc00886dedce5af6))
* **deps:** Bump github.com/runfinch/common-tests from 0.7.11 to 0.7.12 ([#761](https://github.com/runfinch/finch/issues/761)) ([bb17a96](https://github.com/runfinch/finch/commit/bb17a96b58b85c42fdc6fbd093209ce1ab900707))
* **deps:** Bump github.com/shirou/gopsutil/v3 from 3.23.11 to 3.23.12 ([#744](https://github.com/runfinch/finch/issues/744)) ([eb55877](https://github.com/runfinch/finch/commit/eb55877a330d4c45eb210a19188f54032d7f8274))
* **deps:** Bump golang.org/x/crypto from 0.16.0 to 0.18.0 ([#751](https://github.com/runfinch/finch/issues/751)) ([fc434ac](https://github.com/runfinch/finch/commit/fc434ac4f288bb1d2eeef3c2e2bcb186e8aa5278))
* **deps:** Bump golang.org/x/image from 0.0.0-20210220032944-ac19c3e999fb to 0.10.0 ([#752](https://github.com/runfinch/finch/issues/752)) ([9a08b45](https://github.com/runfinch/finch/commit/9a08b45466cc58326df05d94dfe91edd07158759))
* **deps:** Bump golang.org/x/tools from 0.16.0 to 0.16.1 ([#734](https://github.com/runfinch/finch/issues/734)) ([efecfca](https://github.com/runfinch/finch/commit/efecfcae8922f47581a4575125acbe375a706b11))
* **deps:** Bump golang.org/x/tools from 0.16.1 to 0.17.0 ([#757](https://github.com/runfinch/finch/issues/757)) ([89623da](https://github.com/runfinch/finch/commit/89623dab53f0128c1616c66a7361a5ce3df847c3))
* **deps:** Bump submodules and dependencies ([#733](https://github.com/runfinch/finch/issues/733)) ([8b2d8cd](https://github.com/runfinch/finch/commit/8b2d8cddc7fc63264c7f5bf1be2bd4417a92aaeb))


### Experimental

* make finch work on windows with wsl2 ([#649](https://github.com/runfinch/finch/issues/649)) ([31cdc41](https://github.com/runfinch/finch/commit/31cdc411d29758bae54a0b3fdb37be2777bd9fdc))


### Features

* upgrade Windows support to "feature" ([#778](https://github.com/runfinch/finch/issues/778)) ([63894d1](https://github.com/runfinch/finch/commit/63894d12f3ab9d2c02700779e42182d06019a85f))


### Bug Fixes

* properly reload persistent snapshotter data and restart services ([#767](https://github.com/runfinch/finch/issues/767)) ([700cb92](https://github.com/runfinch/finch/commit/700cb92da72510b47498c48f188c50806382a291))
* temporarily switch to our own nerdctl-full bundle with patched runc and buildkit ([#783](https://github.com/runfinch/finch/issues/783)) ([f677e2e](https://github.com/runfinch/finch/commit/f677e2e03c7ee94e18ea990c1723f41bac660698))

## [1.0.1](https://github.com/runfinch/finch/compare/v1.0.0...v1.0.1) (2023-12-11)


### Bug Fixes

* Change the default behavoir for deleting .finch folder to false when uninstall ([#732](https://github.com/runfinch/finch/issues/732)) ([e818743](https://github.com/runfinch/finch/commit/e8187432a02c59a821a0d3b39c9cbc51f75a60cd))
* Clean up all previous finch version installation registries in postinstall and uninstall ([#688](https://github.com/runfinch/finch/issues/688)) ([9afc0b9](https://github.com/runfinch/finch/commit/9afc0b9a5e73a3c261aeac87b977e44129b311bd))
* Fix to be able to run finch build with --ssh option ([#696](https://github.com/runfinch/finch/issues/696)) ([4d1e6cf](https://github.com/runfinch/finch/commit/4d1e6cf6d8f4b6f2cbdf0229e8dcf4ad0c80d80c))
* Fix to delete ~/.finch when uninstalling finch ([#703](https://github.com/runfinch/finch/issues/703)) ([8d7389f](https://github.com/runfinch/finch/commit/8d7389f607fc0211ebd6cfafe13197b945d877a3))
* remove virtual machine image when running make clean ([98c8ee4](https://github.com/runfinch/finch/commit/98c8ee4f783d01cb1340e77b508d868c3bb4bf04))
* resolve shellcheck warnings ([#684](https://github.com/runfinch/finch/issues/684)) ([d9f695a](https://github.com/runfinch/finch/commit/d9f695a39f17af6ab00722fbf5191b6fa5c9166b))
* Use LimaUser method instead of host user name ([#712](https://github.com/runfinch/finch/issues/712)) ([7c02e08](https://github.com/runfinch/finch/commit/7c02e08394f667e1f69cd304ef0258c1f0ff1c0f))

### Reverts

* "fix: resolve shellcheck warnings" ([#725](https://github.com/runfinch/finch/issues/725)) ([8ea255a](https://github.com/runfinch/finch/commit/8ea255abb64c653a8c35e82c9c17aec9904278c5))

## [1.0.0](https://github.com/runfinch/finch/compare/v0.9.0...v1.0.0) (2023-10-31)


### chore

* update Release-As version to 1.0.0 (not-squashed) ([2c97323](https://github.com/runfinch/finch/commit/2c97323deccfbc860e304b3297c8e51f91b7e2c0))


### Bug Fixes

* ecr credential helper hash check ([#668](https://github.com/runfinch/finch/issues/668)) ([4b1b0a2](https://github.com/runfinch/finch/commit/4b1b0a2fa515bcfaaa6784ffa53a5918245cbd72))
* ecr creds helper and credential_process ([#510](https://github.com/runfinch/finch/issues/510)) ([0525753](https://github.com/runfinch/finch/commit/0525753105403e27e5d1372588c0c87aa6b6cbe6))
* improve creds helper UX ([#673](https://github.com/runfinch/finch/issues/673)) ([bc238cf](https://github.com/runfinch/finch/commit/bc238cf9383d0fbc983a7f76f2cc15821eafd265))
* run SOCI as a systemd service ([#667](https://github.com/runfinch/finch/issues/667)) ([24fd649](https://github.com/runfinch/finch/commit/24fd649152b3ca18a1024d3a2ea40806c0c96cf2))
* soci being reset on vm stop/start ([#672](https://github.com/runfinch/finch/issues/672)) ([9df7d32](https://github.com/runfinch/finch/commit/9df7d325b25fe98fdb8327bc4603ae4441b6a190))


### Build System or External Dependencies

* **deps:** Bump github.com/docker/cli from 24.0.6+incompatible to 24.0.7+incompatible ([#665](https://github.com/runfinch/finch/issues/665)) ([43a57ff](https://github.com/runfinch/finch/commit/43a57ffc052ba1ffcf0f50cdb08dfdb42abc9723))
* **deps:** Bump github.com/docker/docker from 24.0.6+incompatible to 24.0.7+incompatible ([#666](https://github.com/runfinch/finch/issues/666)) ([4e06d28](https://github.com/runfinch/finch/commit/4e06d283512ed851279cb4988089f1c610896ba9))
* **deps:** Bump github.com/lima-vm/lima from 0.17.2 to 0.18.0 ([#643](https://github.com/runfinch/finch/issues/643)) ([f181b89](https://github.com/runfinch/finch/commit/f181b8970c6d63a25d22be44820d1570c95b6f41))
* **deps:** Bump github.com/onsi/gomega from 1.27.10 to 1.28.0 ([#583](https://github.com/runfinch/finch/issues/583)) ([9d1ad57](https://github.com/runfinch/finch/commit/9d1ad5748967b8b978131ddb50071200fcceffde))
* **deps:** Bump github.com/runfinch/common-tests from 0.7.6 to 0.7.7 ([#609](https://github.com/runfinch/finch/issues/609)) ([e21ae83](https://github.com/runfinch/finch/commit/e21ae836d4f73ea07852e3cd1fc6cc16d56e4f32))
* **deps:** Bump github.com/runfinch/common-tests from 0.7.7 to 0.7.8 ([#617](https://github.com/runfinch/finch/issues/617)) ([4d942f5](https://github.com/runfinch/finch/commit/4d942f550c86106a224e97f32f1bf90f1b4d44cb))
* **deps:** Bump github.com/shirou/gopsutil/v3 from 3.23.8 to 3.23.9 ([#588](https://github.com/runfinch/finch/issues/588)) ([20385b7](https://github.com/runfinch/finch/commit/20385b7c5c0a45f5495615ebb3ce70220ab15969))
* **deps:** Bump golang.org/x/tools from 0.13.0 to 0.14.0 ([#610](https://github.com/runfinch/finch/issues/610)) ([8938cf3](https://github.com/runfinch/finch/commit/8938cf394f12b42da976c2963fad82c42a52aa85))
* **deps:** Bump google.golang.org/grpc from 1.53.0 to 1.56.3 ([#658](https://github.com/runfinch/finch/issues/658)) ([321487c](https://github.com/runfinch/finch/commit/321487c9309a73625512255ff86b6ffc6977b86e))
* **deps:** Bump k8s.io/apimachinery from 0.28.2 to 0.28.3 ([#652](https://github.com/runfinch/finch/issues/652)) ([05f9d53](https://github.com/runfinch/finch/commit/05f9d53dab468546918a332f0fc18449de774487))
* **deps:** Bump submodules and dependencies ([#637](https://github.com/runfinch/finch/issues/637)) ([b094751](https://github.com/runfinch/finch/commit/b094751d3ba56c7855fc6f3af7b8bef2618a7206))

## [0.9.0](https://github.com/runfinch/finch/compare/v0.8.0...v0.9.0) (2023-09-25)


### Features

* support push with SOCI ([#578](https://github.com/runfinch/finch/issues/578)) ([69721b7](https://github.com/runfinch/finch/commit/69721b76151a4c24d82cdc1c9338bacf72afb15d))
* supports adding files inside the VM to support bundles ([#549](https://github.com/runfinch/finch/issues/549)) ([3b1df46](https://github.com/runfinch/finch/commit/3b1df4697e7b020d6c7339fb71bacf62ca0b3ee0))


### Bug Fixes

* enables bridge-nf-call-iptables by default ([#539](https://github.com/runfinch/finch/issues/539)) ([6ea1499](https://github.com/runfinch/finch/commit/6ea1499c1320545ba4efe8a7820dcf0998e28782))
* **Makefile:** use POSIX tar syntax for stdin ([#529](https://github.com/runfinch/finch/issues/529)) ([e222131](https://github.com/runfinch/finch/commit/e2221310e1725b3a6072abe12e72f01859ce3320))


### Build System or External Dependencies

* **deps:** Bump github.com/docker/cli from 24.0.5+incompatible to 24.0.6+incompatible ([#560](https://github.com/runfinch/finch/issues/560)) ([21bb893](https://github.com/runfinch/finch/commit/21bb893105f0a4fc5541e3a8e9f5306edb739154))
* **deps:** Bump github.com/docker/docker from 24.0.5+incompatible to 24.0.6+incompatible ([#561](https://github.com/runfinch/finch/issues/561)) ([e0160be](https://github.com/runfinch/finch/commit/e0160be4b90b9db0e9e544a8ad9b170c08b38756))
* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.11.0 to 2.12.0 ([#542](https://github.com/runfinch/finch/issues/542)) ([8536481](https://github.com/runfinch/finch/commit/85364818e9f5a9ca1993fa7a3fc8ce775e002a42))
* **deps:** Bump github.com/runfinch/common-tests from 0.7.2 to 0.7.3 ([#548](https://github.com/runfinch/finch/issues/548)) ([a054ef3](https://github.com/runfinch/finch/commit/a054ef3aa028b2c50fca93631a7b547b9c535f2e))
* **deps:** Bump github.com/shirou/gopsutil/v3 from 3.23.7 to 3.23.8 ([#552](https://github.com/runfinch/finch/issues/552)) ([cf9399a](https://github.com/runfinch/finch/commit/cf9399a5dd125b875d6212b029ed19530898cdee))
* **deps:** Bump golang.org/x/crypto from 0.12.0 to 0.13.0 ([#558](https://github.com/runfinch/finch/issues/558)) ([f24264d](https://github.com/runfinch/finch/commit/f24264d30805252d91b531c2bca8d9c883b88196))
* **deps:** Bump golang.org/x/tools from 0.12.0 to 0.13.0 ([#559](https://github.com/runfinch/finch/issues/559)) ([0f56d23](https://github.com/runfinch/finch/commit/0f56d23b4e9210960c02822cd19a8a47326caa0e))
* **deps:** Bump k8s.io/apimachinery from 0.28.0 to 0.28.1 ([#543](https://github.com/runfinch/finch/issues/543)) ([675f76f](https://github.com/runfinch/finch/commit/675f76fa6d8874587c09237faeb82d9f96c14adb))
* **deps:** Bump k8s.io/apimachinery from 0.28.1 to 0.28.2 ([#568](https://github.com/runfinch/finch/issues/568)) ([915d658](https://github.com/runfinch/finch/commit/915d658fbd6581eec437f2c31121366ff77a5981))
* **deps:** Bump submodules and dependencies ([#544](https://github.com/runfinch/finch/issues/544)) ([94b7497](https://github.com/runfinch/finch/commit/94b74978e135fbf6375fe1a21ce4b64b77db5ee7))
* **deps:** Bump submodules and dependencies ([#551](https://github.com/runfinch/finch/issues/551)) ([baf645f](https://github.com/runfinch/finch/commit/baf645f250344a42bc4ee3ea53e97b2c82dbb55a))
* **deps:** Bump submodules and dependencies ([#565](https://github.com/runfinch/finch/issues/565)) ([c02413f](https://github.com/runfinch/finch/commit/c02413f47ade25232830a04548625297267caf9f))
* **deps:** Bump submodules and dependencies ([#567](https://github.com/runfinch/finch/issues/567)) ([f70314e](https://github.com/runfinch/finch/commit/f70314ef4a517d1fb69dc8444e621262f7e4dcd0))

## [0.8.0](https://github.com/runfinch/finch/compare/v0.7.0...v0.8.0) (2023-08-16)


### Features

* adding config option for SOCI installation on VM ([#506](https://github.com/runfinch/finch/issues/506)) ([a2e077b](https://github.com/runfinch/finch/commit/a2e077b8f72dc8d8d833aedce31b3ad3f9f45eb4))


### Bug Fixes

* configure aws creds in sync submodules/deps action ([#518](https://github.com/runfinch/finch/issues/518)) ([b67452e](https://github.com/runfinch/finch/commit/b67452e012d5d00f2ff66e023b4672f7957fe625))
* give pull request write permissions to sync job ([#520](https://github.com/runfinch/finch/issues/520)) ([55b5235](https://github.com/runfinch/finch/commit/55b5235d50feb6557108c00cd8543d21f1fdf315))
* give token write perms to sync-submodules ([#519](https://github.com/runfinch/finch/issues/519)) ([8b639ea](https://github.com/runfinch/finch/commit/8b639eac14691caa99a6bfddd61be0b811a796d9))
* Mount /var/folders to finch vm ([#525](https://github.com/runfinch/finch/issues/525)) ([c97d2e9](https://github.com/runfinch/finch/commit/c97d2e93edaf139c3960620ec00454f856a8daee))
* option to use installed lima for SOCI e2e tests ([#533](https://github.com/runfinch/finch/issues/533)) ([8b66659](https://github.com/runfinch/finch/commit/8b666590631235f6430d652d5c50f0047a120893))
* quote recursive calls to make ([#515](https://github.com/runfinch/finch/issues/515)) ([d603096](https://github.com/runfinch/finch/commit/d6030965414e80e1f3c550e67097ce5f34aeff41))
* Restart buildkit after containerd when provisioning ([#461](https://github.com/runfinch/finch/issues/461)) ([fca1828](https://github.com/runfinch/finch/commit/fca182877ca616257527f6186dd1e88b2919feeb))


### Build System or External Dependencies

* **deps:** Bump github.com/docker/cli from 24.0.4+incompatible to 24.0.5+incompatible ([#495](https://github.com/runfinch/finch/issues/495)) ([e9e8617](https://github.com/runfinch/finch/commit/e9e8617b07301848dc1f6c3afa18643d212d024e))
* **deps:** Bump github.com/docker/docker from 24.0.4+incompatible to 24.0.5+incompatible ([#497](https://github.com/runfinch/finch/issues/497)) ([6f1afbb](https://github.com/runfinch/finch/commit/6f1afbb69554148efd8eea938278bcc5104ab050))
* **deps:** Bump github.com/lima-vm/lima from 0.16.0 to 0.17.2 ([#531](https://github.com/runfinch/finch/issues/531)) ([6e33d15](https://github.com/runfinch/finch/commit/6e33d159e2f522784860bc60ceea897a98d1fe5f))
* **deps:** Bump github.com/onsi/gomega from 1.27.8 to 1.27.10 ([#496](https://github.com/runfinch/finch/issues/496)) ([d08d102](https://github.com/runfinch/finch/commit/d08d102d05a350a8b8e586c42ef83d51495cf4f9))
* **deps:** Bump github.com/pkg/sftp from 1.13.5 to 1.13.6 ([#530](https://github.com/runfinch/finch/issues/530)) ([09b3846](https://github.com/runfinch/finch/commit/09b38467333e5e59eadb76cd5f4612768cde5289))
* **deps:** Bump github.com/shirou/gopsutil/v3 from 3.23.6 to 3.23.7 ([#513](https://github.com/runfinch/finch/issues/513)) ([83bd718](https://github.com/runfinch/finch/commit/83bd718be67ddba624e8218034c91bf399e2cccd))
* **deps:** Bump golang.org/x/tools from 0.11.0 to 0.11.1 ([#509](https://github.com/runfinch/finch/issues/509)) ([e826bcf](https://github.com/runfinch/finch/commit/e826bcff385946bb6629db8935d3aa912befb5bb))
* **deps:** Bump golang.org/x/tools from 0.11.1 to 0.12.0 ([#523](https://github.com/runfinch/finch/issues/523)) ([09d6514](https://github.com/runfinch/finch/commit/09d6514bfba31a898e3b3407964113f21fb6b244))
* **deps:** Bump k8s.io/apimachinery from 0.27.3 to 0.27.4 ([#487](https://github.com/runfinch/finch/issues/487)) ([444bbc0](https://github.com/runfinch/finch/commit/444bbc0779dbe22207fec471389810e398c1cf50))
* **deps:** Bump k8s.io/apimachinery from 0.27.4 to 0.28.0 ([#535](https://github.com/runfinch/finch/issues/535)) ([8df84cf](https://github.com/runfinch/finch/commit/8df84cf8c54bd772c28a83df918c251a540c881a))
* **deps:** Bump submodules and dependencies ([#521](https://github.com/runfinch/finch/issues/521)) ([1b3ad94](https://github.com/runfinch/finch/commit/1b3ad94f9477eb3f8d33cbea90880f78ca403ff7))

## [0.7.0](https://github.com/runfinch/finch/compare/v0.6.2...v0.7.0) (2023-07-18)


### Features

* ECR credential integration into Finch  ([#462](https://github.com/runfinch/finch/issues/462)) ([d3514b3](https://github.com/runfinch/finch/commit/d3514b3dbe69e1bed3d40838af01ebec184f7413))


### Bug Fixes

* Add cleanup script to Makefile ([#444](https://github.com/runfinch/finch/issues/444)) ([da91f87](https://github.com/runfinch/finch/commit/da91f87369e5fde221b8edbac374954e71dae947))


### Build System or External Dependencies

* **deps:** Bump github.com/docker/docker from 24.0.2+incompatible to 24.0.4+incompatible ([#469](https://github.com/runfinch/finch/issues/469)) ([ad37f4f](https://github.com/runfinch/finch/commit/ad37f4fbce72a6f479620461127e8fe494d47cad))
* **deps:** Bump github.com/docker/docker from 24.0.2+incompatible to 24.0.4+incompatible ([#481](https://github.com/runfinch/finch/issues/481)) ([15d2a4b](https://github.com/runfinch/finch/commit/15d2a4bf8cfd3956a2f8bb4878bfb86827b4e77d))
* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.10.0 to 2.11.0 ([#456](https://github.com/runfinch/finch/issues/456)) ([f7e0916](https://github.com/runfinch/finch/commit/f7e091670fb2ac5377423e72f98aa8be33aa41c8))
* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.9.7 to 2.10.0 ([#449](https://github.com/runfinch/finch/issues/449)) ([a415e3e](https://github.com/runfinch/finch/commit/a415e3ef7b2741853bf352b915c4100c77600619))
* **deps:** Bump github.com/onsi/gomega from 1.27.7 to 1.27.8 ([#448](https://github.com/runfinch/finch/issues/448)) ([96fc8d0](https://github.com/runfinch/finch/commit/96fc8d09a051b2ead932e6eef064624b1a842b66))
* **deps:** Bump github.com/runfinch/common-tests from 0.7.0 to 0.7.1 ([#477](https://github.com/runfinch/finch/issues/477)) ([54c03bb](https://github.com/runfinch/finch/commit/54c03bbfba132d797b0efa1171ce3fdc6eb8af9e))
* **deps:** Bump github.com/shirou/gopsutil/v3 from 3.23.5 to 3.23.6 ([#464](https://github.com/runfinch/finch/issues/464)) ([43a6720](https://github.com/runfinch/finch/commit/43a672011fd47830073b8cc7427f82c6f1c3e5bd))
* **deps:** Bump github.com/sirupsen/logrus from 1.9.2 to 1.9.3 ([#446](https://github.com/runfinch/finch/issues/446)) ([1823677](https://github.com/runfinch/finch/commit/18236774d971065dec28d1db204e1f697d418a9b))
* **deps:** Bump golang.org/x/crypto from 0.10.0 to 0.11.0 ([#465](https://github.com/runfinch/finch/issues/465)) ([dc5a3e7](https://github.com/runfinch/finch/commit/dc5a3e7240d4af6b63874e239bc77bed04d2a0a6))
* **deps:** Bump golang.org/x/crypto from 0.9.0 to 0.10.0 ([#451](https://github.com/runfinch/finch/issues/451)) ([fef6e77](https://github.com/runfinch/finch/commit/fef6e772c28429ef14068702c1dfd8e9fec2dea1))
* **deps:** Bump golang.org/x/tools from 0.10.0 to 0.11.0 ([#466](https://github.com/runfinch/finch/issues/466)) ([a8b32f9](https://github.com/runfinch/finch/commit/a8b32f9674f93cfe54686a2e29b4cf6ca4534939))
* **deps:** Bump golang.org/x/tools from 0.9.3 to 0.10.0 ([#455](https://github.com/runfinch/finch/issues/455)) ([e321f1d](https://github.com/runfinch/finch/commit/e321f1dc607626a7f65b33e0a0f503d8c856b1f2))
* **deps:** Bump k8s.io/apimachinery from 0.27.2 to 0.27.3 ([#454](https://github.com/runfinch/finch/issues/454)) ([d6746a4](https://github.com/runfinch/finch/commit/d6746a447e10bed6c13d197c8d693b27e02ac3aa))
* **deps:** Bump lima version ([#476](https://github.com/runfinch/finch/issues/476)) ([7b330d3](https://github.com/runfinch/finch/commit/7b330d3e2bd4cc623f46762c8e3b120ddc18f3b0))
* **deps:** Bump submodules ([#482](https://github.com/runfinch/finch/issues/482)) ([92f2494](https://github.com/runfinch/finch/commit/92f2494f17bde67b785ccf444ac6525b7a856a6c))

## [0.6.2](https://github.com/runfinch/finch/compare/v0.6.1...v0.6.2) (2023-06-02)


### Bug Fixes

* sort volume args in DOCKER_COMPAT mode ([#417](https://github.com/runfinch/finch/issues/417)) ([6a8ca1a](https://github.com/runfinch/finch/commit/6a8ca1a559dada6ed320c9454fbc3229446a0a40))
* Stop lima process in postinstall and uninstall ([#438](https://github.com/runfinch/finch/issues/438)) ([975c4ee](https://github.com/runfinch/finch/commit/975c4ee42c1529673a51382c62c4096dc663f80a))


### Build System or External Dependencies

* **deps:** Bump github.com/docker/docker from 23.0.6+incompatible to 24.0.0+incompatible ([#406](https://github.com/runfinch/finch/issues/406)) ([25aa324](https://github.com/runfinch/finch/commit/25aa324ca324248cf2093af23f205af1b5ae276f))
* **deps:** Bump github.com/docker/docker from 24.0.0+incompatible to 24.0.1+incompatible ([#413](https://github.com/runfinch/finch/issues/413)) ([bb1cab2](https://github.com/runfinch/finch/commit/bb1cab229c787752615eb00e74f240c4a4e0e23d))
* **deps:** Bump github.com/docker/docker from 24.0.1+incompatible to 24.0.2+incompatible ([#419](https://github.com/runfinch/finch/issues/419)) ([f6f8aeb](https://github.com/runfinch/finch/commit/f6f8aeb40fa0b2cfaa807c98eb3576ca262d75aa))
* **deps:** Bump github.com/lima-vm/lima from 0.15.1 to 0.16.0 ([#428](https://github.com/runfinch/finch/issues/428)) ([6a67f0c](https://github.com/runfinch/finch/commit/6a67f0cfb0a3a1da438779f4faa04048f25d7dde))
* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.9.5 to 2.9.7 ([#432](https://github.com/runfinch/finch/issues/432)) ([0a381f1](https://github.com/runfinch/finch/commit/0a381f17ea2602bc3b19f9b2101da9e3a589f6d3))
* **deps:** Bump github.com/onsi/gomega from 1.27.6 to 1.27.7 ([#409](https://github.com/runfinch/finch/issues/409)) ([80513c7](https://github.com/runfinch/finch/commit/80513c7785a6da4ae09d9c871acaf180f5d68f2c))
* **deps:** Bump github.com/runfinch/common-tests from 0.6.5 to 0.7.0 ([#420](https://github.com/runfinch/finch/issues/420)) ([ac18046](https://github.com/runfinch/finch/commit/ac18046e70efc0e1e9fe11a30457f6f945df2a23))
* **deps:** Bump github.com/shirou/gopsutil/v3 from 3.23.4 to 3.23.5 ([#437](https://github.com/runfinch/finch/issues/437)) ([8635294](https://github.com/runfinch/finch/commit/8635294bcb22207bfdaa3f96756f93ba580ff6e2))
* **deps:** Bump github.com/sirupsen/logrus from 1.9.0 to 1.9.1 ([#405](https://github.com/runfinch/finch/issues/405)) ([05b6b2e](https://github.com/runfinch/finch/commit/05b6b2e7364036a3d30b67ad409f55526cc59ffe))
* **deps:** Bump github.com/sirupsen/logrus from 1.9.1 to 1.9.2 ([#408](https://github.com/runfinch/finch/issues/408)) ([0ff477a](https://github.com/runfinch/finch/commit/0ff477ab32e2c427bbc800b6ae65efc72b5ed1eb))
* **deps:** Bump github.com/stretchr/testify from 1.8.2 to 1.8.4 ([#429](https://github.com/runfinch/finch/issues/429)) ([0f7750e](https://github.com/runfinch/finch/commit/0f7750ebeee01108a9f6a6fcfe0c7f5f044bc336))
* **deps:** Bump golang.org/x/tools from 0.9.1 to 0.9.3 ([#443](https://github.com/runfinch/finch/issues/443)) ([b192874](https://github.com/runfinch/finch/commit/b192874e2b1c5de1c2148813760cbe65e15d7553))
* **deps:** Bump k8s.io/apimachinery from 0.27.1 to 0.27.2 ([#407](https://github.com/runfinch/finch/issues/407)) ([e6cbd2c](https://github.com/runfinch/finch/commit/e6cbd2c5dba8af5cab9ea8a37a33c580ee4edef9))
* **deps:** Bump submodules ([#402](https://github.com/runfinch/finch/issues/402)) ([06d86b2](https://github.com/runfinch/finch/commit/06d86b2bc348db9f0d8d02678faee556719b883d))
* **deps:** Bump submodules ([#439](https://github.com/runfinch/finch/issues/439)) ([e9551b5](https://github.com/runfinch/finch/commit/e9551b50010deb43ad26dcd3671ec2f246e84ed6))

## [0.6.1](https://github.com/runfinch/finch/compare/v0.6.0...v0.6.1) (2023-05-15)


### Build System or External Dependencies

* **deps:** Bump github.com/docker/docker from 23.0.3+incompatible to 23.0.5+incompatible ([#382](https://github.com/runfinch/finch/issues/382)) ([3e0581c](https://github.com/runfinch/finch/commit/3e0581cc0f86efcd9ce7b7dc8c9384fb1e6af785))
* **deps:** Bump github.com/docker/docker from 23.0.5+incompatible to 23.0.6+incompatible ([#394](https://github.com/runfinch/finch/issues/394)) ([f44bc2e](https://github.com/runfinch/finch/commit/f44bc2eb14011640f7a25218bbc18a82d533e76a))
* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.9.2 to 2.9.3 ([#390](https://github.com/runfinch/finch/issues/390)) ([7102994](https://github.com/runfinch/finch/commit/710299445ed287c67114b277be7bd2a29715956b))
* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.9.3 to 2.9.5 ([#400](https://github.com/runfinch/finch/issues/400)) ([65458f1](https://github.com/runfinch/finch/commit/65458f1b0c20705e724ac07356d87dd47ae2000c))
* **deps:** Bump github.com/shirou/gopsutil/v3 from 3.23.3 to 3.23.4 ([#389](https://github.com/runfinch/finch/issues/389)) ([76b31c0](https://github.com/runfinch/finch/commit/76b31c0c453935f22588523f65888e103581cd89))
* **deps:** Bump golang.org/x/crypto from 0.8.0 to 0.9.0 ([#397](https://github.com/runfinch/finch/issues/397)) ([f15c2ee](https://github.com/runfinch/finch/commit/f15c2ee576416c0cb25de45438bd894ca6b1fdcb))
* **deps:** Bump submodules ([#375](https://github.com/runfinch/finch/issues/375)) ([70fe4c3](https://github.com/runfinch/finch/commit/70fe4c3e0320f237d2e4501fbe2bc4d3320ef3e9))

## [0.6.0](https://github.com/runfinch/finch/compare/v0.5.0...v0.6.0) (2023-04-20)


### Features

* add experimental support for Cosign signing and verification ([#296](https://github.com/runfinch/finch/issues/296)) ([84c2634](https://github.com/runfinch/finch/commit/84c2634b7c1226ba9746d0cda4d22ec571454160))


### Bug Fixes

* always force stop when using Virtualization.framework ([#350](https://github.com/runfinch/finch/issues/350)) ([c521f1f](https://github.com/runfinch/finch/commit/c521f1f65d406094c653b7a78d0009285b9fc627))
* explicitly set permissions for socket_vmnet dependencies ([#363](https://github.com/runfinch/finch/issues/363)) ([0801b88](https://github.com/runfinch/finch/commit/0801b8841776e7a08d2a0826bbca535310b02f37))


### Build System or External Dependencies

* add local-core Makefile target ([#351](https://github.com/runfinch/finch/issues/351)) ([f86c56f](https://github.com/runfinch/finch/commit/f86c56f68273cc4d8c9584477793fc7efa148e76))
* **deps:** Bump github.com/docker/docker from 23.0.1+incompatible to 23.0.2+incompatible ([#320](https://github.com/runfinch/finch/issues/320)) ([ee3df9a](https://github.com/runfinch/finch/commit/ee3df9a31e4ebab872001ba7756a81a49aaa9ad5))
* **deps:** Bump github.com/docker/docker from 23.0.2+incompatible to 23.0.3+incompatible ([#343](https://github.com/runfinch/finch/issues/343)) ([6cfbb9f](https://github.com/runfinch/finch/commit/6cfbb9ffa3a9bc3b3c06235dffbc6c7625d5aede))
* **deps:** Bump github.com/lima-vm/lima from 0.15.0 to 0.15.1 ([#365](https://github.com/runfinch/finch/issues/365)) ([1d3ee98](https://github.com/runfinch/finch/commit/1d3ee985427e601bf3f5659c3bba13467ec01ce0))
* **deps:** Bump github.com/onsi/gomega from 1.27.5 to 1.27.6 ([#331](https://github.com/runfinch/finch/issues/331)) ([fe388a3](https://github.com/runfinch/finch/commit/fe388a31f830f854abacb06729ddf710040e9e62))
* **deps:** Bump github.com/runfinch/common-tests from 0.6.4 to 0.6.5 ([#357](https://github.com/runfinch/finch/issues/357)) ([dc84864](https://github.com/runfinch/finch/commit/dc848640b719c623dbf606439e6e3e1d9dcd02d6))
* **deps:** Bump github.com/runfinch/common-tests version from v0.6.2 to v0.6.3 ([#328](https://github.com/runfinch/finch/issues/328)) ([1c44b3e](https://github.com/runfinch/finch/commit/1c44b3e270aa2e2ebb237e86f17f3a9519ec124b))
* **deps:** Bump github.com/spf13/cobra from 1.6.1 to 1.7.0 ([#341](https://github.com/runfinch/finch/issues/341)) ([6a77f72](https://github.com/runfinch/finch/commit/6a77f721f35779bd112d5e1206bf034940a43a23))
* **deps:** Bump golang.org/x/crypto from 0.7.0 to 0.8.0 ([#349](https://github.com/runfinch/finch/issues/349)) ([82b27c9](https://github.com/runfinch/finch/commit/82b27c9bb1424ef47fe05cf805aebc337af3bc5e))
* **deps:** Bump golang.org/x/tools from 0.7.0 to 0.8.0 ([#348](https://github.com/runfinch/finch/issues/348)) ([aaca2c9](https://github.com/runfinch/finch/commit/aaca2c994a2c146e751c43fbb4fabb78041da98d))
* **deps:** Bump k8s.io/apimachinery from 0.26.3 to 0.27.1 ([#366](https://github.com/runfinch/finch/issues/366)) ([b93d3a8](https://github.com/runfinch/finch/commit/b93d3a8ed8eef42321200ac1386b61765e0b8348))
* **deps:** Bump lima version ([#354](https://github.com/runfinch/finch/issues/354)) ([c721ee6](https://github.com/runfinch/finch/commit/c721ee69f470eaf81b24fc043f088713fce88ad6))
* **deps:** Bump lima version ([#362](https://github.com/runfinch/finch/issues/362)) ([5e03a4d](https://github.com/runfinch/finch/commit/5e03a4d40c63a8fcc5a79bdda2ebfec6f993db3c))
* **deps:** Bump lima version ([#368](https://github.com/runfinch/finch/issues/368)) ([8e4dfe4](https://github.com/runfinch/finch/commit/8e4dfe4092a959d853549ed980e1c36a9e630be8))
* **deps:** Bump submodules ([#340](https://github.com/runfinch/finch/issues/340)) ([daed9e2](https://github.com/runfinch/finch/commit/daed9e24228b82b6d45c2eb43e86101b2a4420c9))
* **deps:** Bump submodules ([#371](https://github.com/runfinch/finch/issues/371)) ([19fc0c5](https://github.com/runfinch/finch/commit/19fc0c5d16a6d2fb876b05575420a8080c8a3562))

## [0.5.0](https://github.com/runfinch/finch/compare/v0.4.1...v0.5.0) (2023-03-29)


### Features

* adds support bundles ([#210](https://github.com/runfinch/finch/issues/210)) ([cc6be65](https://github.com/runfinch/finch/commit/cc6be6577c97697e99112a7b693eff2664b747ef))


### Bug Fixes

* Correctly set and pick up environment variables ([#315](https://github.com/runfinch/finch/issues/315)) ([05227ce](https://github.com/runfinch/finch/commit/05227ce03055223bc7ffd10c634cc75a9632634e))
* print debug logs after newline ([#273](https://github.com/runfinch/finch/issues/273)) ([8faa7de](https://github.com/runfinch/finch/commit/8faa7de81bbb5eb222c5abb4b1239ef8b27e15cb))
* print debug logs when lima disk command fails ([#270](https://github.com/runfinch/finch/issues/270)) ([78a3f50](https://github.com/runfinch/finch/commit/78a3f5002e10442bf818015de55b940cd4bcf19d))


### Experimental

* **feat:** enable Virtualization.framework and Rosetta ([#282](https://github.com/runfinch/finch/issues/282)) ([fd3bf19](https://github.com/runfinch/finch/commit/fd3bf19ae454b493fd7f9b1b85a5522881020af1))


### Build System or External Dependencies

* clean up finch-core _output directory in clean target ([#290](https://github.com/runfinch/finch/issues/290)) ([4684a95](https://github.com/runfinch/finch/commit/4684a959205a1f701ede8b59e7822354cb7d0d70))
* **deps:** bump github.com/onsi/ginkgo/v2 from 2.8.4 to 2.9.0 ([#265](https://github.com/runfinch/finch/issues/265)) ([7e2d49e](https://github.com/runfinch/finch/commit/7e2d49e8b09c4167a6e3ad5df4a6f6d9ab9ca728))
* **deps:** bump github.com/onsi/ginkgo/v2 from 2.9.0 to 2.9.1 ([#285](https://github.com/runfinch/finch/issues/285)) ([d741a03](https://github.com/runfinch/finch/commit/d741a03ac368673432a29f45f5fdaa6f6580fbc9))
* **deps:** Bump github.com/onsi/gomega from 1.27.3 to 1.27.5 ([#312](https://github.com/runfinch/finch/issues/312)) ([e078234](https://github.com/runfinch/finch/commit/e07823454ba86701ff7316e8c44e78d1c5ceb454))
* **deps:** bump github.com/runfinch/common-tests from 0.6.1 to 0.6.2 ([#300](https://github.com/runfinch/finch/issues/300)) ([dd626a0](https://github.com/runfinch/finch/commit/dd626a024203ec28bba46bf1e1c65b1b6644334d))
* **deps:** bump github.com/spf13/afero from 1.9.4 to 1.9.5 ([#263](https://github.com/runfinch/finch/issues/263)) ([a0e277f](https://github.com/runfinch/finch/commit/a0e277f8cba008e2422d11fac26f33640a2ab160))
* **deps:** bump golang.org/x/crypto from 0.6.0 to 0.7.0 ([#264](https://github.com/runfinch/finch/issues/264)) ([ec1c07f](https://github.com/runfinch/finch/commit/ec1c07ff3567396fb0f5a461ece2b048133cce68))
* **deps:** bump golang.org/x/tools from 0.6.0 to 0.7.0 ([#268](https://github.com/runfinch/finch/issues/268)) ([8072e39](https://github.com/runfinch/finch/commit/8072e39172831c8f3c18b8d17b186ec4a421d830))
* **deps:** bump k8s.io/apimachinery from 0.26.2 to 0.26.3 ([#306](https://github.com/runfinch/finch/issues/306)) ([fe392cb](https://github.com/runfinch/finch/commit/fe392cb07cb4ca50b064bbb6f6667b7942047ffb))
* **deps:** Bump lima version ([#302](https://github.com/runfinch/finch/issues/302)) ([0269743](https://github.com/runfinch/finch/commit/026974314254df1e4047ea5130ba50464608bb1d))
* **deps:** Bump submodules ([#281](https://github.com/runfinch/finch/issues/281)) ([d4fd1f6](https://github.com/runfinch/finch/commit/d4fd1f6902d51985c829808c65738e38f7e2cdd1))
* **deps:** Bump submodules ([#304](https://github.com/runfinch/finch/issues/304)) ([b38af9f](https://github.com/runfinch/finch/commit/b38af9fe0e5c4ffb3eb94641d70dd16e3fe7c833))
* **deps:** Bump submodules ([#307](https://github.com/runfinch/finch/issues/307)) ([1a914ec](https://github.com/runfinch/finch/commit/1a914ec11c9fcbbb56982c3361a3716ab7a946b2))
* **deps:** Bump submodules ([#319](https://github.com/runfinch/finch/issues/319)) ([e671224](https://github.com/runfinch/finch/commit/e671224bdb87983bce0db6e797ccfe71fb5dfc63))
* **deps:** Bump submodules ([#332](https://github.com/runfinch/finch/issues/332)) ([5923ae2](https://github.com/runfinch/finch/commit/5923ae2933e6cb2e9bf9e74db4584679af56c471))

## [0.4.1](https://github.com/runfinch/finch/compare/v0.4.0...v0.4.1) (2023-03-02)


### Bug Fixes

* parse --add-host special ip with equal sign ([#229](https://github.com/runfinch/finch/issues/229)) ([fb4b62b](https://github.com/runfinch/finch/commit/fb4b62bc6987ed786da8f1a351ea8200206be941))
* switch from rootless containers to rootful containers ([#232](https://github.com/runfinch/finch/issues/232)) ([ae43a07](https://github.com/runfinch/finch/commit/ae43a0779c778cc3656724f84b5cdfd8ab087798))


### Build System or External Dependencies

* **deps:** Bump github.com/containerd/containerd from 1.6.14 to 1.6.18 ([#223](https://github.com/runfinch/finch/issues/223)) ([7480222](https://github.com/runfinch/finch/commit/748022258bcdb9f25b41d64cdffdee250c9e6274))
* **deps:** bump github.com/lima-vm/lima from 0.14.2 to 0.15.0 ([#247](https://github.com/runfinch/finch/issues/247)) ([007081e](https://github.com/runfinch/finch/commit/007081e6f1d07071b3e0535a87009f985702b2ee))
* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.8.0 to 2.8.3 ([#233](https://github.com/runfinch/finch/issues/233)) ([1185372](https://github.com/runfinch/finch/commit/1185372b672e76373e4b7e798de9725bf6ecba50))
* **deps:** bump github.com/onsi/ginkgo/v2 from 2.8.3 to 2.8.4 ([#245](https://github.com/runfinch/finch/issues/245)) ([5e64716](https://github.com/runfinch/finch/commit/5e647165f7dfccd185d2c0fa94c565309a5a54b0))
* **deps:** Bump github.com/onsi/gomega from 1.26.0 to 1.27.1 ([#234](https://github.com/runfinch/finch/issues/234)) ([cd43781](https://github.com/runfinch/finch/commit/cd43781b37750579905fc4e32d63f17ad1ec678f))
* **deps:** bump github.com/onsi/gomega from 1.27.1 to 1.27.2 ([#246](https://github.com/runfinch/finch/issues/246)) ([863c51e](https://github.com/runfinch/finch/commit/863c51e7262e720a93cfea90cf01b0477fd1a2d2))
* **deps:** Bump github.com/runfinch/common-tests from 0.5.0 to 0.6.0 ([#235](https://github.com/runfinch/finch/issues/235)) ([4a33a2e](https://github.com/runfinch/finch/commit/4a33a2e63c72e687030c70b13dcc5c5748606b86))
* **deps:** Bump github.com/spf13/afero from 1.9.3 to 1.9.4 ([#241](https://github.com/runfinch/finch/issues/241)) ([58f26e6](https://github.com/runfinch/finch/commit/58f26e66be84cc6e566960fd81276fff5ee124c0))
* **deps:** bump github.com/stretchr/testify from 1.8.1 to 1.8.2 ([#244](https://github.com/runfinch/finch/issues/244)) ([984af70](https://github.com/runfinch/finch/commit/984af7008db46eb9e4eecac3050d05f6f76ebcca))
* **deps:** Bump golang.org/x/crypto from 0.5.0 to 0.6.0 ([#212](https://github.com/runfinch/finch/issues/212)) ([e1a36cf](https://github.com/runfinch/finch/commit/e1a36cf9ff39c1273761ca810e357e6200f31de8))
* **deps:** bump k8s.io/apimachinery from 0.26.1 to 0.26.2 ([#251](https://github.com/runfinch/finch/issues/251)) ([4a7268e](https://github.com/runfinch/finch/commit/4a7268ede5d6f9d2fc3e30f167d2a4ebc91bb5f2))
* update os image versions ([#255](https://github.com/runfinch/finch/issues/255)) ([576765b](https://github.com/runfinch/finch/commit/576765b2913b714d274bc1ab8b418f9ce9421b9d))

## [0.4.0](https://github.com/runfinch/finch/compare/v0.3.0...v0.4.0) (2023-02-13)


### ⚠ BREAKING CHANGES

* persists nerdctl user data ([#182](https://github.com/runfinch/finch/issues/182))

### Features

* adds a --force flag to vm stop and remove ([#178](https://github.com/runfinch/finch/issues/178)) ([d499a7d](https://github.com/runfinch/finch/commit/d499a7d712bcc726f331ff07f0e0855ddc9046fa))
* Support special IP host-gateway in --add-host flag ([#216](https://github.com/runfinch/finch/issues/216)) ([9a38c8e](https://github.com/runfinch/finch/commit/9a38c8e6bc8aa155cda0cdc5b4d80bb12bac8eb8))


### Bug Fixes

* correctly handle local environment value pass-through ([#158](https://github.com/runfinch/finch/issues/158)) ([e138f10](https://github.com/runfinch/finch/commit/e138f1053fe9219ae6584e49d38c43f306b75e6b))
* persists nerdctl user data ([#182](https://github.com/runfinch/finch/issues/182)) ([59f372c](https://github.com/runfinch/finch/commit/59f372cb0875f800015abe989d4eba6b8df92e42))
* persists network user data ([#211](https://github.com/runfinch/finch/issues/211)) ([f6baf82](https://github.com/runfinch/finch/commit/f6baf82171d6c487efb21bc0eb45d772124e04b2))


### Build System or External Dependencies

* **deps:** Bump github.com/google/go-licenses from 1.5.0 to 1.6.0 ([#168](https://github.com/runfinch/finch/issues/168)) ([bb5674c](https://github.com/runfinch/finch/commit/bb5674c846a094d06203449c83a90bd4eaf71a53))
* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.7.0 to 2.7.1 ([#193](https://github.com/runfinch/finch/issues/193)) ([7aaa381](https://github.com/runfinch/finch/commit/7aaa381cebc0e5306fc78f0de576f4065eb89cd8))
* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.7.1 to 2.8.0 ([#200](https://github.com/runfinch/finch/issues/200)) ([596ed33](https://github.com/runfinch/finch/commit/596ed337f03a4a1f861aceaa6844b1acc55355aa))
* **deps:** Bump github.com/onsi/gomega from 1.25.0 to 1.26.0 ([#183](https://github.com/runfinch/finch/issues/183)) ([12661b7](https://github.com/runfinch/finch/commit/12661b789f6b9162392d698f07a69e34ae391ab8))
* **deps:** Bump golang.org/x/tools from 0.5.0 to 0.6.0 ([#215](https://github.com/runfinch/finch/issues/215)) ([decf250](https://github.com/runfinch/finch/commit/decf250bae9e1cce8c0cb78daee62e7160fc0027))
* **deps:** Bump k8s.io/apimachinery from 0.26.0 to 0.26.1 ([#174](https://github.com/runfinch/finch/issues/174)) ([829b0bc](https://github.com/runfinch/finch/commit/829b0bc05824203e60609264c18d075c1eea845b))
* make finch-core a submodule instead of downloading archives ([#188](https://github.com/runfinch/finch/issues/188)) ([b08f588](https://github.com/runfinch/finch/commit/b08f588cd13b7a1a7c457f279b74489e9df09fb5))

## [0.3.0](https://github.com/runfinch/finch/compare/v0.2.0...v0.3.0) (2023-01-18)


### ⚠ BREAKING CHANGES

* changes persistent disk path to prevent collisions

### Features

* add `finch vm status` command ([#83](https://github.com/runfinch/finch/issues/83)) ([37d74d0](https://github.com/runfinch/finch/commit/37d74d0b82c41f439715d0a07e723fd5e5a9a617))


### Bug Fixes

* changes persistent disk path to prevent collisions ([3eb66a2](https://github.com/runfinch/finch/commit/3eb66a21bcbf56dd8e4465bfc3ed840903b069d9))


### Build System or External Dependencies

* **deps:** Bump github.com/onsi/gomega from 1.24.2 to 1.25.0 ([#165](https://github.com/runfinch/finch/issues/165)) ([e4b9e96](https://github.com/runfinch/finch/commit/e4b9e96713feac19bc73dfc2dd788a80c28a064f))
* **deps:** Bump github.com/runfinch/common-tests from 0.2.0 to 0.3.0 ([#151](https://github.com/runfinch/finch/issues/151)) ([79df04e](https://github.com/runfinch/finch/commit/79df04ef62df615c19070e607a060769ab09e7a0))
* **deps:** Bump github.com/runfinch/common-tests version from v0.3.0 to v0.3.1 ([#169](https://github.com/runfinch/finch/issues/169)) ([16157fe](https://github.com/runfinch/finch/commit/16157fe3adfc8be19899700ae3f1cd5c1a848304))
* **deps:** Bump golang.org/x/crypto from 0.4.0 to 0.5.0 ([#144](https://github.com/runfinch/finch/issues/144)) ([603419a](https://github.com/runfinch/finch/commit/603419a703154e8a8eac404da2b9aeb76c5b3333))

## [0.2.0](https://github.com/runfinch/finch/compare/v0.1.1...v0.2.0) (2023-01-11)


### Features

* add `finch cp` command ([#135](https://github.com/runfinch/finch/issues/135)) ([5989361](https://github.com/runfinch/finch/commit/598936166c6fd4a6999e4d3e8d074447e122aea7))
* add config to support additional directories ([#128](https://github.com/runfinch/finch/issues/128)) ([0ceb060](https://github.com/runfinch/finch/commit/0ceb0602c6e1b90b25fa9de19303ea6ccdece6d7))
* Print version with Client and Server ([#108](https://github.com/runfinch/finch/issues/108)) ([7f7cdda](https://github.com/runfinch/finch/commit/7f7cdda1d21e430c259eb24a82c6b5784606cbac))
* saves containerd user data to a persistent disk ([#133](https://github.com/runfinch/finch/issues/133)) ([fccb4f3](https://github.com/runfinch/finch/commit/fccb4f3530b5abc7943db921c25c4f01ea76d725))


### Bug Fixes

* Configure Buildkit Namespace as Env Variable ([#129](https://github.com/runfinch/finch/issues/129)) ([ffb90be](https://github.com/runfinch/finch/commit/ffb90beeeeef7cb8db5706f9198e06d6e111f53f))
* fix the misleading log when applying invalid config ([#119](https://github.com/runfinch/finch/issues/119)) ([b4f74c5](https://github.com/runfinch/finch/commit/b4f74c5a61f78034cc761ea3977b17e36a624692))
* ignore .ssh pub keys ([#109](https://github.com/runfinch/finch/issues/109)) ([0b74597](https://github.com/runfinch/finch/commit/0b745979ae142c73e3ef5be8d6fd31f142a5d6cd))


### Build System or External Dependencies

* **deps:** Bump github.com/lima-vm/lima from 0.13.0 to 0.14.0 ([#113](https://github.com/runfinch/finch/issues/113)) ([9b275bc](https://github.com/runfinch/finch/commit/9b275bc807ef6498c8bf38f49e8347b6e0f0b99b))
* **deps:** Bump github.com/lima-vm/lima from 0.14.0 to 0.14.1 ([#120](https://github.com/runfinch/finch/issues/120)) ([9dea794](https://github.com/runfinch/finch/commit/9dea79434e800cf72fa511195011f8fa04fc87d6))
* **deps:** Bump github.com/lima-vm/lima from 0.14.1 to 0.14.2 ([#130](https://github.com/runfinch/finch/issues/130)) ([26b7b09](https://github.com/runfinch/finch/commit/26b7b094814db88d500621b581ba8d6f676a21bc))
* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.5.1 to 2.6.0 ([#114](https://github.com/runfinch/finch/issues/114)) ([934521c](https://github.com/runfinch/finch/commit/934521c9bf763c0c4106394b40b158c89390b022))
* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.6.0 to 2.6.1 ([#121](https://github.com/runfinch/finch/issues/121)) ([becbc44](https://github.com/runfinch/finch/commit/becbc443a5084ad15e916b41f8aa0f28791b4973))
* **deps:** Bump github.com/onsi/gomega from 1.24.1 to 1.24.2 ([#122](https://github.com/runfinch/finch/issues/122)) ([d8174ff](https://github.com/runfinch/finch/commit/d8174ff773f0f92ec94d6d97c753a872a98f74a0))
* **deps:** Bump github.com/runfinch/common-tests from 0.1.1 to 0.2.0 ([#125](https://github.com/runfinch/finch/issues/125)) ([1bac92a](https://github.com/runfinch/finch/commit/1bac92a99f2e031792018dedfb6425488af51f1e))
* **deps:** Bump golang.org/x/crypto from 0.3.0 to 0.4.0 ([#102](https://github.com/runfinch/finch/issues/102)) ([d2778e3](https://github.com/runfinch/finch/commit/d2778e3b2b123f1e7882920f16c4d91f9f96304e))
* **deps:** Bump golang.org/x/crypto from 0.4.0 to 0.5.0 ([#138](https://github.com/runfinch/finch/issues/138)) ([8d06eec](https://github.com/runfinch/finch/commit/8d06eecdc94fb284da6f6587ba031a898d30ba5f))
* **deps:** Bump golang.org/x/tools from 0.3.0 to 0.4.0 ([#101](https://github.com/runfinch/finch/issues/101)) ([b3c4df1](https://github.com/runfinch/finch/commit/b3c4df1e65bfc95b120b243c2c10463436994d06))
* **deps:** Bump golang.org/x/tools from 0.4.0 to 0.5.0 ([#139](https://github.com/runfinch/finch/issues/139)) ([89194dc](https://github.com/runfinch/finch/commit/89194dc52757d8f30a8fe8621115e184299bf3e7))
* **deps:** Bump k8s.io/apimachinery from 0.25.4 to 0.26.0 ([#115](https://github.com/runfinch/finch/issues/115)) ([e9084a4](https://github.com/runfinch/finch/commit/e9084a413330799ed01da94f826518f30f33a83b))
* **deps:** Bump lima version ([#141](https://github.com/runfinch/finch/issues/141)) ([35da07d](https://github.com/runfinch/finch/commit/35da07d7cc65fe5749a7eb665413824cf3115a08))

## [0.1.1](https://github.com/runfinch/finch/compare/v0.1.0...v0.1.1) (2022-12-06)


### Bug Fixes

* added the contrib folder to be ignored by CI ([#92](https://github.com/runfinch/finch/issues/92)) ([3415f2a](https://github.com/runfinch/finch/commit/3415f2a6683b0218816e189c7ed47100a031d45c))
* error readable by using the right placeholder ([#39](https://github.com/runfinch/finch/issues/39)) ([8e5f38d](https://github.com/runfinch/finch/commit/8e5f38d2b994dadf53f57430eaa0a59b8cafd2f8))
* Change amd64 runner to 10.15 OS version for amd64 build ([#72](https://github.com/runfinch/finch/issues/72)) ([78a646e](https://github.com/runfinch/finch/commit/78a646e67402a14c57c2acc2704cf3e060b5c29f))


### Build System or External Dependencies

* **deps:** bump finch-core to 0.1.1 ([#93](https://github.com/runfinch/finch/issues/93)) ([3f3bce5](https://github.com/runfinch/finch/commit/3f3bce568ede67c8c54dd92212ec5882443c966f))
* **deps:** Bump github.com/lima-vm/lima from 0.12.0 to 0.13.0 ([#40](https://github.com/runfinch/finch/issues/40)) ([520cc7f](https://github.com/runfinch/finch/commit/520cc7f06f9a98652fb077822f1a752da26f7bb9))
* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.5.0 to 2.5.1 ([#50](https://github.com/runfinch/finch/issues/50)) ([fa108fd](https://github.com/runfinch/finch/commit/fa108fd958649578d08b20725ead6ce7a5a190db))
* **deps:** Bump github.com/runfinch/common-tests version from v0.1.0 to v0.1.1 ([#76](https://github.com/runfinch/finch/issues/76)) ([fd22d4a](https://github.com/runfinch/finch/commit/fd22d4afafd387eda404a7286952f85c80fa5418))
* **deps:** Bump github.com/spf13/afero from 1.9.2 to 1.9.3 ([#43](https://github.com/runfinch/finch/issues/43)) ([bf0ad84](https://github.com/runfinch/finch/commit/bf0ad849a90ded53b66b01031e1960bd7803b224))
* **deps:** Bump github.com/stretchr/testify from 1.8.0 to 1.8.1 ([#44](https://github.com/runfinch/finch/issues/44)) ([31c6d70](https://github.com/runfinch/finch/commit/31c6d70748b9346c9468e3f2882f7e6b8b27bd6b))
* **deps:** Bump github.com/xorcare/pointer from 1.2.1 to 1.2.2 ([#42](https://github.com/runfinch/finch/issues/42)) ([8e83137](https://github.com/runfinch/finch/commit/8e83137a1cd12fe1d47187bb96e362ec8d34ca4b))
* **deps:** Bump golang.org/x/crypto from 0.1.0 to 0.3.0 ([#49](https://github.com/runfinch/finch/issues/49)) ([89826cf](https://github.com/runfinch/finch/commit/89826cf141253746395259438788bb6150410727))
* **deps:** Bump golang.org/x/tools from 0.2.0 to 0.3.0 ([#52](https://github.com/runfinch/finch/issues/52)) ([27c8f24](https://github.com/runfinch/finch/commit/27c8f24aa1219d397e67f264a45cdcd96e5a23a5))
* **deps:** Bump k8s.io/apimachinery from 0.25.2 to 0.25.4 ([#51](https://github.com/runfinch/finch/issues/51)) ([8f15779](https://github.com/runfinch/finch/commit/8f157797cdfedda17cca36fe0a5458a582e7b4a2))
* **deps:** Bump lima version ([#75](https://github.com/runfinch/finch/issues/75)) ([cfaa4f6](https://github.com/runfinch/finch/commit/cfaa4f6b79af2eba3cfceff0b0e65f44329d1e78))
