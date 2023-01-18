# Changelog

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
