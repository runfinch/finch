# Changelog

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
