(function() {
    var e = {
            86205: function(e, t, n) {
                "use strict";
                n.d(t, {
                    c: function() {
                        return y
                    },
                    i: function() {
                        return c
                    }
                });
                var a = n(98569),
                    i = n(48649);
                const s = n(53272);
                a.A.defaults.baseURL = s.baseOneURL;
                const o = a.A.create({
                    timeout: 3e4
                });

                function r(e, t = {}) {
                    return o({
                        url: e,
                        method: "GET",
                        headers: {},
                        params: t
                    })
                }

                function l(e, t = {}) {
                    return o({
                        url: e,
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        data: t
                    })
                }

                function u(e) {
                    return o({
                        url: e,
                        method: "DELETE"
                    })
                }

                function p(e, t = {}) {
                    return o({
                        url: e,
                        method: "PUT",
                        params: t
                    })
                }
                o.interceptors.response.use((e => 200 != e.status ? (console.log(i["default"]), Promise.reject(e)) : (401 == e.data.code && localStorage.clear(), Promise.resolve(e.data))), (e => {
                    if (e.response) switch (e.response.status) {
                        case 401:
                            console.log(401);
                            break;
                        case 403:
                            console.log(403);
                            break;
                        case 404:
                            console.log(404);
                            break;
                        case 500:
                            console.log(500);
                            break
                    }
                    return Promise.reject(e.response)
                }));
                var d = {
                    get: r,
                    put: p,
                    post: l,
                    deletes: u
                };

                function c(e) {
                    return d.get(`https://unpkg.com/obsswap-tokenlist/tokenlist/${e["chainID"]}/tokenlist.json`, e)
                }

                function y(e) {
                    return d.get("https://unpkg.com/obsswap-tokenlist/noticelist.json", e)
                }
            },
            50223: function(e, t, n) {
                "use strict";
                n.d(t, {
                    A$: function() {
                        return r
                    },
                    Y2: function() {
                        return l
                    },
                    id: function() {
                        return u
                    },
                    uf: function() {
                        return o
                    },
                    x9: function() {
                        return s
                    }
                });
                var a = n(21441);
                const i = n(53272),
                    s = [7234, 233],
                    o = [{
                        chainId: 7234,
                        chainName: "Genesis Testnet"
                    }, {
                        chainId: 233,
                        chainName: "Pioneer Testnet"
                    }],
                    r = {
                        233: i.pioneerScan,
                        7234: i.genesisScan
                    },
                    l = (0, a.xHY)({
                        id: 233,
                        caipNetworkId: "eip155:233",
                        chainNamespace: "eip155",
                        name: "Pioneer Testnet",
                        nativeCurrency: {
                            decimals: 18,
                            name: "Pioneer InitVerse",
                            symbol: "INI"
                        },
                        rpcUrls: {
                            default: {
                                http: ["http://rpc-testnet.iniscan.com"]
                            }
                        },
                        blockExplorers: {
                            default: {
                                name: "InitVersePioneerScan",
                                url: "https://testnet.iniscan.com",
                                apiUrl: "https://explorer-testnet-api.iniscan.com/api"
                            }
                        }
                    }),
                    u = (0, a.xHY)({
                        id: 7234,
                        caipNetworkId: "eip155:7234",
                        chainNamespace: "eip155",
                        name: "Genesis Testnet",
                        nativeCurrency: {
                            decimals: 18,
                            name: "Genesis InitVerse",
                            symbol: "INI"
                        },
                        rpcUrls: {
                            default: {
                                http: ["http://rpc-testnet.inichain.com"]
                            }
                        },
                        blockExplorers: {
                            default: {
                                name: "InitVerseGenesisScan",
                                url: "https://genesis-testnet.iniscan.com",
                                apiUrl: "https://explorer-testnet-api.inichain.com/api"
                            }
                        }
                    })
            },
            87275: function(e, t, n) {
                "use strict";
                n.d(t, {
                    F2: function() {
                        return h
                    },
                    MY: function() {
                        return f
                    }
                });
                var a = n(72708),
                    i = n(44602),
                    s = n(56127),
                    o = (n(21441), n(50223));
                n(53272);
                const r = "aa306f83ba439ae0e361109c10045480",
                    l = new s.k,
                    u = {
                        name: "Obsswap",
                        description: "InitVerse test chain swap",
                        url: "https://test.obsswap.org",
                        icons: ["https://avatars.mywebsite.com/"]
                    };
                let p = null;

                function d() {
                    return p || (p = (0, i.sX)({
                        adapters: [l],
                        metadata: u,
                        networks: [o.id, o.Y2],
                        projectId: r,
                        defaultNetwork: o.id,
                        allWallets: "SHOW",
                        allowUnsupportedChain: !1,
                        chainImages: {
                            7234: "https://www.clownwallet.com/res/ini.png",
                            233: "https://www.clownwallet.com/res/ini.png"
                        },
                        features: {
                            swaps: !1,
                            onramp: !1,
                            send: !1,
                            history: !1,
                            email: !1,
                            socials: !1,
                            analytics: !0
                        },
                        themeVariables: {
                            "--w3m-z-index": 1e6
                        }
                    }), p)
                }
                let c = null;

                function y(e) {
                    if (c && !e) return c;
                    const t = d(),
                        n = t.getIsConnectedState(),
                        i = t.getChainId();
                    if (n && o.x9.includes(i)) {
                        const e = t.getWalletProvider();
                        c = new a.Ay$(e)
                    }
                    return c
                }

                function m() {
                    c = null
                }
                const h = () => {
                        const e = d(),
                            t = e.getChainId();
                        return t && o.x9.includes(t) ? t : null
                    },
                    f = () => `https://raw.githubusercontent.com/verse-extend/obsswap-tokenlist/main/assets/${h()}/`;
                t.Ay = {
                    disconnectWallet: m,
                    getWeb3ModalProvider: y,
                    getInitGlobalWeb3Modal: d
                }
            },
            57652: function(e, t, n) {
                "use strict";
                n.r(t);
                const a = {
                    message: {
                        mallHeader: {
                            Trade: "Swap",
                            Meta: "Meta",
                            Explore: "Market",
                            Earn: "Liquidity",
                            Win: "Info",
                            connect: "Connect to Wallet",
                            connectTitle: "Connect to a wallet",
                            connected: "Connected",
                            disconnect: "Disconnect",
                            Address: "Address",
                            Balance: "Balance",
                            learnMore: "Learn more about wallets",
                            notWallet: "Haven’t got a crypto wallet yet?",
                            Cooperate: "Cooperate",
                            Guide: "Guide"
                        },
                        mallFooter: {
                            desc: "Earlier this year, a mysterious force coming from another galaxy summoned the most influential people on planet Earth to a secret party. Acquiring one of them will give you access to an ever-growing community of investors and entrepreneurs.",
                            company: "C O M P A N Y",
                            help: "H E L P",
                            connect: "C O N N E C T",
                            emailUs: "Email Us",
                            fileDownload: "File download",
                            guide: "Guide"
                        },
                        home: {
                            title: "Discover the Potential of Your Assets In Ouroboros Swap",
                            startBigSwap: "Start Big 5swap",
                            liquidityProviders: "FOR LIQUIDITY PROVIDERS",
                            liquidityProvidersText1: "Earn Passive Income with Your Crypto Assets",
                            liquidityProvidersText2: "Earn fees and rewards by depositing your tokens into our pools.",
                            lowerSlippage: "LOWER SLIPPAGE",
                            lowerSlippageText1: "Amplified Liquidity Pools",
                            lowerSlippageText2: "We can amplify liquidity pools to provide much higher capital efficiency and better slippage for you. Deposit less tokens and still achieve better liquidity and volume.",
                            higherReturns: "HIGHER RETURNS",
                            higherReturnsText1: "Dynamic Fees",
                            higherReturnsText2: "We adjust trading fees dynamically based on market conditions to give you the best returns.",
                            bonusRewards: "BONUS REWARDS",
                            bonusRewardsText1: "Rainmaker Yield Farming",
                            bonusRewardsText2: "Deposit your tokens and farm attractive rewards. We collaborate with projects to get you the best rewards.",
                            forTraders: "FOR TRADERS",
                            forTradersText1: "Swap your tokens at the best rates. No limits",
                            forTradersText2: "Through our dynamic trade routing technology, we aggregate liquidity from multiple exchanges, including Obsswap, and select the best trade route for you.",
                            forTradersText3: "No KYC or sign-ups required",
                            forTradersText4: "No extra deposit or withdrawal fees",
                            forTradersText5: "Supports permissionless listing",
                            partners: "Partners",
                            partnersText: "Creating the future of digital finance with Big ObsSwap",
                            contactUs: "Contact us",
                            contactUsText: "Establish strategic partnership with us"
                        },
                        trade: {
                            swap: "Swap",
                            swapFrom: "Swap from",
                            swapTo: "Swap to",
                            balance: "Balance",
                            selectToken: "Select a Token",
                            enterAmount: "Enter an Amount",
                            price: "Price",
                            priceAmount: "{price} {symbolA} pre 1{symbolB}",
                            minimumReceived: "Minimum received",
                            maximumSold: "Maximum sold",
                            priceImpact: "Price Impact",
                            liquidityProviderFee: "Liquidity Provider Fee",
                            minimumReceivedPrompt: "Your transaction will recent if there is a large,unfavorable price movement before it is confirmed.",
                            priceImpactPrompt: "The difference between the market price and estimated price due to trade size.",
                            liquidityProviderFeePrompt: "A portion of each trade({fee}) goes to liquidity providers as a protocol incentive.",
                            connectWallet: "Connect Wallet",
                            approve: "Approve",
                            insufficientBalance: "Insufficient balance",
                            insufficientLiquidity: "Insufficient liquidity",
                            transactionSettings: "Transaction Settings",
                            slippageTolerance: "Slippage Tolerance",
                            slippageDealine: "Slippage Dealine",
                            minutes: "minutes",
                            interfaceSetting: "Interface Setting",
                            toggleExpertMode: "Toggle Expert Mode",
                            disableMultihops: "Disable Multihops",
                            slippageTolerancePrompt: "Your transaction will revert if the price changes unfavorably by more than this percentage.",
                            slippageDealinePrompt: "Your transaction will revert if it is left confirming for longer than this time.",
                            toggleExpertModePrompt: "Bypasses confirmation modals and allows high slippage trades. Use at your own risk.",
                            disableMultihopsPrompt: "Restricts swaps to direct pairs only.",
                            tips1: "Enter a valid slippage percentage",
                            tips2: "Your transaction may fail",
                            tips3: "Your transaction may be frontrun",
                            searchPlaceholder: "Search name or paste address",
                            import: "Import",
                            manage: "Manage",
                            importToken: "Import Token",
                            importTokenText1: "Risk warning!",
                            importTokenText2: "Anyone can create a token,including creating fake version of existing tokens that claim to represent projects. If you purchase this token, you may not be able to sell it back",
                            iUnderstand: "I understand",
                            confirmSwap: "Confirm Swap",
                            from: "from",
                            to: "to",
                            confirmSwapText: "Output is estimated.You will receive at least {toInput} {symbol} or the transaction will revert",
                            pendingTransaction: "Pending Transaction",
                            pendingTransactionText: "Confirm this transaction in your wallet",
                            pendingAddToken: "Add Big5-LP to Metamask",
                            transactionSubmitted: "Transaction Submitted",
                            transactionFailed: "Transaction Rejected",
                            viewOnBscScan: "View On IniverseScan",
                            swapping: "Swapping",
                            adding: "Adding",
                            removing: "Removing",
                            for: "for",
                            and: "and"
                        },
                        win: {
                            title: "1000+ games coming soon",
                            stayTuned: "STAY TUNED",
                            big5wap: "Big 5wap"
                        },
                        earn: {
                            liquidityProviderRewards: "Liquidity provider rewards",
                            yourLiquidity: "Your Liquidity",
                            createPair: "Create a Pair",
                            addLiquidity: "Add Liquidity",
                            noLiquidityFound: "No liquidity found.",
                            Earned: "Earned",
                            APR: "APR",
                            Liquidity: "Liquidity",
                            Add: "Add",
                            Remove: "Remove",
                            YourTotalPoolTokens: "Your total pool tokens",
                            Pooled: "Pooled",
                            YourPoolShare: "Your pool share",
                            addLiquidityTips: "Tip:when you add liquidity,you will receive pool tokens representing your position.These tokens automatically earn fees proportional to your share of the pool,and can be redeemed at any time.",
                            Input: "Input",
                            PriceAndPoolShare: "Price and pool share",
                            ShareOfPool: "Share of Pool",
                            Supply: "Supply",
                            removeLiquidity: "Remove Liquidity",
                            removeLiquidityTips: "Tip:Removing pool tokens converse your position back into underlying tokens at the current rate,proportional to your share of the pool.Accrued fees are included in the amount you receive.",
                            Amount: "Amount",
                            MAX: "MAX",
                            add: "Add",
                            remove: "Remove",
                            Confirm: "Confirm",
                            YouWillReceive: "You will Receive",
                            WillReceiveTips: "Output is estimated.If the price changes by more than {slippage}% your transaction will revert.",
                            Token: "Token",
                            Burned: "Burned",
                            Deposited: "Deposited",
                            liquidityProviderRewardsPrompt: "liquidity providers earn a 0.3% fee on all trades proportional to their share of the pool.Fees are added to the pool,accrue in real time and can be claimed by withdrawing your liquidity."
                        },
                        alertMsg: {
                            MetaMaskPlugin: "Please make sure your browser has installed the MetaMask plug-in",
                            copySuccess: "Successful recovery",
                            castCompletion: "casting completed",
                            checkCreatorMsg: "Please go to the laboratory to check",
                            bindSuperAddressMsg: "Please go to the laboratory to bind the superior",
                            castFailureMsg: "casting failed",
                            harvestLPALADMsg: "The number of ALAD to be extracted is 0",
                            harvestLPMsg: "The number of LP to be extracted is 0",
                            contentLPEmpty: "Please enter the amount of pledged LP",
                            insufficientBalance: "Insufficient balance",
                            stayTuned: "Stay tuned"
                        }
                    }
                };
                t["default"] = a
            },
            41137: function(e, t, n) {
                "use strict";
                n.r(t);
                const a = {
                    message: {
                        mallHeader: {
                            Trade: "交易",
                            Meta: "元宇宙",
                            Win: "行情",
                            Earn: "赚取",
                            connect: "连接钱包",
                            connectTitle: "连接钱包",
                            connected: "已连接",
                            disconnect: "断开",
                            Address: "地址",
                            Balance: "余额",
                            learnMore: "了解有关钱包的更多信息",
                            notWallet: "还没有加密钱包？",
                            Cooperate: "合作",
                            Guide: "指南"
                        },
                        mallFooter: {
                            desc: "今年早些时候，来自另一个星系的神秘力量召集了地球上最有影响力的人参加一个秘密聚会。收购其中一个将使您能够接触到不断增长的投资者和企业家社区。",
                            company: "关 于 我 们",
                            help: "帮 助",
                            connect: "联 系 我 们",
                            emailUs: "邮件联系",
                            fileDownload: "下载文件",
                            guide: "指南"
                        },
                        home: {
                            title: '在 <span style="background-image: linear-gradient(80deg, #85ffc4 -5%, #5cc6ff 44%, #bc85ff 99%);-webkit-background-clip: text; -webkit-text-fill-color: transparent;">Big 5swap</span> 中\n发现您资产的<span style="background-image: linear-gradient(80deg, #85ffc4 -5%, #5cc6ff 44%, #bc85ff 99%);-webkit-background-clip: text; -webkit-text-fill-color: transparent;">潜力</span>',
                            startBigSwap: "开启 Big 5swap 之旅",
                            liquidityProviders: "流动性提供者",
                            liquidityProvidersText1: "用您的加密资产赚取更多收益",
                            liquidityProvidersText2: "通过将您的代币存入我们的池中来赚取费用和奖励。",
                            lowerSlippage: "低滑点",
                            lowerSlippageText1: "放大的流动性池",
                            lowerSlippageText2: "我们可以放大流动性池，为您提供更高的资金效率和更好的滑点。存入更少的代币，仍然可以实现更好的流动性和交易量。",
                            higherReturns: "更高的回报率",
                            higherReturnsText1: "动态费用",
                            higherReturnsText2: "我们根据市场情况动态调整交易费用，给您带来最佳回报。",
                            bonusRewards: "额外奖励",
                            bonusRewardsText1: "Rainmaker 流动性挖矿",
                            bonusRewardsText2: "存入您的代币并获取有吸引力的奖励。我们与项目方合作，让用户得到最好的奖励。",
                            forTraders: "交易者",
                            forTradersText1: "以最好的价格兌換您的代币。没有限制",
                            forTradersText2: "通过我们的动态交易路由技术，我们从多个DEX（包括KyberSwap）汇总流动性，并为您提供最佳的交易路由。",
                            forTradersText3: "无需 KYC 或注册",
                            forTradersText4: "没有额外的存款或取款费用",
                            forTradersText5: "未经许可列出您的令牌",
                            partners: "合作伙伴",
                            partnersText: "Big 5Swap创造数字金融的未来",
                            contactUs: "联系我们",
                            contactUsText: "与我们建立战略合作伙伴关系"
                        },
                        trade: {
                            swap: "交换",
                            swapFrom: "从",
                            swapTo: "至",
                            balance: "余额",
                            selectToken: "选择代币",
                            enterAmount: "输入数量",
                            price: "价格",
                            priceAmount: "{price} {symbolA} pre 1{symbolB}",
                            minimumReceived: "最小获得量",
                            maximumSold: "最大销售量",
                            priceImpact: "价格影响",
                            liquidityProviderFee: "流动性供应商费用",
                            minimumReceivedPrompt: "如果在确认之前价格出现较大的不利变动，您的交易将被撤回。",
                            priceImpactPrompt: "市场价格与估计价格之间的差异由交易规模引起。",
                            liquidityProviderFeePrompt: "每笔交易的一部分（{fee}）作为协议激励提供给流动性提供者。",
                            connectWallet: "连接钱包",
                            approve: "授权",
                            insufficientBalance: "余额不足",
                            insufficientLiquidity: "此交易流动性不足",
                            transactionSettings: "交易设置",
                            slippageTolerance: "滑点容差",
                            slippageDealine: "交易截止期限",
                            minutes: "分钟",
                            interfaceSetting: "界面设置",
                            toggleExpertMode: "专家模式",
                            disableMultihops: "禁止多跳",
                            slippageTolerancePrompt: "如果兑换率变动超过此百分比，则将还原该交易。",
                            slippageDealinePrompt: "如果您的交易待处理超过此时间期限，则将还原该交易。",
                            toggleExpertModePrompt: "允许高度影响价格的交易，并跳过确认步骤。需自行承认使用风险。",
                            disableMultihopsPrompt: "将交易限制为仅限直接币对。",
                            tips1: "输入有效的滑点百分比",
                            tips2: "你的交易可能会失败",
                            tips3: "你的交易可能会被超前",
                            searchPlaceholder: "搜索名称或粘贴地址",
                            import: "导入",
                            manage: "管理",
                            importToken: "导入代币",
                            importTokenText1: "风险提示！",
                            importTokenText2: "任何人都可以创建代币，包括创建现有令牌的假版本声称代表项目。如果您购买此代币，你可能无法卖回",
                            iUnderstand: "我明白",
                            confirmSwap: "确认交换",
                            from: "从",
                            to: "至",
                            confirmSwapText: "估计您将收到 {toInput} {symbol} 或交易将恢复",
                            pendingTransaction: "等待确认中",
                            pendingTransactionText: "在您的钱包中确认此交易",
                            pendingAddToken: "将Big5-LP添加到Metamask",
                            transactionSubmitted: "交易已提交",
                            transactionFailed: "交易被拒绝",
                            viewOnBscScan: "在 IniverseScan 上查看 ",
                            swapping: "用",
                            adding: "供应",
                            removing: "移除",
                            for: "换",
                            and: "和"
                        },
                        win: {
                            title: "1000 多款游戏即将推出",
                            stayTuned: "敬请关注",
                            big5wap: "Big 5wap"
                        },
                        earn: {
                            liquidityProviderRewards: "流动性提供者奖励",
                            yourLiquidity: "您的流动性",
                            createPair: "创建",
                            addLiquidity: "添加流动性",
                            noLiquidityFound: "未发现添加的流动性。",
                            Earned: "已赚取",
                            APR: "年化率",
                            Liquidity: "流动性",
                            Add: "添加流动性",
                            Remove: "移除流动性",
                            YourTotalPoolTokens: "您的总池代币",
                            Pooled: "存入",
                            YourPoolShare: "您的池份额",
                            addLiquidityTips: "提示:当您注入流动资金时，您将收到代表您份额的流动池代币。这些代币将根据您在池中所占份额，自动赚取和累计相称的手续费，并且可以随时赎回流动池币对。",
                            Input: "输入",
                            PriceAndPoolShare: "价格和池份额",
                            ShareOfPool: "份额占比",
                            Supply: "供应",
                            removeLiquidity: "移除流动性",
                            removeLiquidityTips: "提示:当您注入流动资金时，您将收到代表您份额的流动池代币。这些代币将根据您在池中所占份额，自动赚取和累计相称的手续费，并且可以随时赎回流动池币对。",
                            Amount: "百分比",
                            MAX: "MAX",
                            add: "添加",
                            remove: "移除",
                            Confirm: "确认",
                            YouWillReceive: "您将收到",
                            WillReceiveTips: "如果价格变动超过{slippage}%，你的交易将恢复正常。",
                            Token: "代币",
                            Burned: "燃烧",
                            Deposited: "存入",
                            liquidityProviderRewardsPrompt: "流动性提供者在所有交易中收取 0.3% 的费用，费用与其在池中的份额成正比。费用会添加到池中，实时产生，并且可以通过提取您的流动性来索取。"
                        },
                        alertMsg: {
                            MetaMaskPlugin: "请确认你的浏览器安装了小狐狸钱包插件",
                            copySuccess: "复制成功",
                            castCompletion: "铸造完成",
                            checkCreatorMsg: "请前往实验室查看",
                            bindSuperAddressMsg: "请先前往实验室绑定上级",
                            castFailureMsg: "铸造失败",
                            harvestLPALADMsg: "待提取的ALAD数量为0",
                            harvestLPMsg: "可提取的LP数量为0",
                            contentLPEmpty: "请输入质押的LP数量",
                            insufficientBalance: "余额不足",
                            stayTuned: "敬请期待"
                        }
                    }
                };
                t["default"] = a
            },
            49699: function(e, t, n) {
                "use strict";
                var a = n(48649),
                    i = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            attrs: {
                                id: "app"
                            }
                        }, [t("div", {
                            staticClass: "header"
                        }, [t("zoon-header")], 1), t("div", {
                            staticClass: "content"
                        }, [t("router-view")], 1), t("bottom-bar", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.screenWidth < 960,
                                expression: "screenWidth<960"
                            }],
                            staticClass: "bottom",
                            attrs: {
                                selected: e.selected,
                                tabBars: e.tabBars
                            }
                        })], 1)
                    },
                    s = [],
                    o = (n(75231), n(21977), n(26980), n(87275)),
                    r = n(50651),
                    l = {
                        data() {
                            return {
                                selected: 0,
                                timer: null,
                                tabBars: [{
                                    name: "/swap",
                                    isShowRedDot: !1,
                                    badge: "",
                                    text: this.$t("message.mallHeader.Trade"),
                                    iconPath: n(59254),
                                    selectedIconPath: n(63781)
                                }, {
                                    name: "/liquidity",
                                    isShowRedDot: !1,
                                    badge: "",
                                    text: this.$t("message.mallHeader.Earn"),
                                    iconPath: n(13498),
                                    selectedIconPath: n(25585)
                                }, {
                                    name: "/Explore",
                                    isShowRedDot: !1,
                                    badge: "",
                                    text: this.$t("message.mallHeader.Explore"),
                                    iconPath: n(25886),
                                    selectedIconPath: n(92317)
                                }]
                            }
                        },
                        created() {
                            this.isConnectWallet && this.addNetworkBlockNumber()
                        },
                        mounted() {
                            this.$store.dispatch("wallet/setScreenWidth", document.body.clientWidth), window.onresize = () => (() => {
                                this.$store.dispatch("wallet/setScreenWidth", document.body.clientWidth)
                            })()
                        },
                        computed: {
                            ...(0, r.L8)(["isConnectWallet", "walletAddress", "gasPrice", "slippage", "deadline", "transactions", "block", "screenWidth"])
                        },
                        watch: {
                            "$i18n.locale"(e, t) {
                                this.tabBars = [{
                                    name: "/swap",
                                    isShowRedDot: !1,
                                    badge: "",
                                    text: this.$t("message.mallHeader.Trade"),
                                    iconPath: n(59254),
                                    selectedIconPath: n(63781)
                                }, {
                                    name: "/liquidity",
                                    isShowRedDot: !1,
                                    badge: "",
                                    text: this.$t("message.mallHeader.Earn"),
                                    iconPath: n(13498),
                                    selectedIconPath: n(25585)
                                }, {
                                    name: "/Explore",
                                    isShowRedDot: !1,
                                    badge: "",
                                    text: this.$t("message.mallHeader.Explore"),
                                    iconPath: n(25886),
                                    selectedIconPath: n(92317)
                                }]
                            },
                            isConnectWallet(e, t) {
                                e ? this.addNetworkBlockNumber() : this.timer && (clearInterval(this.timer), this.timer = null)
                            },
                            block() {
                                this.handleUpdateTransactions()
                            }
                        },
                        methods: {
                            async addNetworkBlockNumber() {
                                const e = await o.Ay.getWeb3ModalProvider(!1).eth.getBlockNumber();
                                await this.$store.dispatch("wallet/setBlock", e), this.timer = setInterval((async () => {
                                    const e = await o.Ay.getWeb3ModalProvider(!1).eth.getBlockNumber();
                                    await this.$store.dispatch("wallet/setBlock", e)
                                }), 6e3)
                            },
                            handleUpdateTransactions() {
                                if (!this.walletAddress) return;
                                const e = Object.values(this.transactions),
                                    t = e.filter((e => !e.receipt && e.from.toLowerCase() == this.walletAddress.toLowerCase()));
                                t.forEach(((e, t) => {
                                    const n = o.Ay.getWeb3ModalProvider(!1).eth,
                                        a = async e => {
                                            try {
                                                const t = await n.getTransactionReceipt(e.hash);
                                                t && (this.$store.dispatch("wallet/setTransactionsReceipt", {
                                                    hash: e.hash,
                                                    receipt: t
                                                }), document.documentElement.clientWidth < 400 ? this.$message({
                                                    type: "success",
                                                    title: e.title,
                                                    message: e.message,
                                                    hash: t.hash
                                                }) : this.$message({
                                                    position: "top-right",
                                                    type: "success",
                                                    title: e.title,
                                                    message: e.message,
                                                    hash: t.hash
                                                }))
                                            } catch (t) {
                                                console.log("get transactionReceipt error =", t)
                                            }
                                        };
                                    a(e)
                                }))
                            }
                        },
                        beforeDestroy() {
                            window.clearInterval(this.timer)
                        },
                        destroyed() {
                            window.onresize = null
                        }
                    },
                    u = l,
                    p = n(50876),
                    d = (0, p.A)(u, i, s, !1, null, "30973024", null),
                    c = d.exports,
                    y = (n(2795), n(82666));
                const m = [{
                    path: "/home",
                    name: "home",
                    alias: "/",
                    hidden: !0,
                    component: () => Promise.all([n.e(881), n.e(595)]).then(n.bind(n, 83595)),
                    meta: {
                        title: "home",
                        scrollToTop: !0
                    }
                }, {
                    path: "/swap",
                    name: "swap",
                    hidden: !0,
                    component: () => Promise.all([n.e(881), n.e(313), n.e(594)]).then(n.bind(n, 59594)),
                    meta: {
                        title: "swap",
                        scrollToTop: !0
                    }
                }, {
                    path: "/liquidity",
                    name: "liquidity",
                    hidden: !0,
                    component: () => Promise.all([n.e(881), n.e(313), n.e(983)]).then(n.bind(n, 42983)),
                    meta: {
                        title: "liquidity",
                        scrollToTop: !0
                    }
                }];
                a["default"].use(y.Ay);
                const h = new y.Ay({
                    mode: "history",
                    scrollBehavior(e, t, n) {
                        if (n) return n; {
                            const t = {};
                            return e.matched.some((e => e.meta.scrollToTop)) && (t.x = 0, t.y = 0), t
                        }
                    },
                    routes: m
                });
                const f = y.Ay.prototype.push,
                    T = y.Ay.prototype.replace;
                y.Ay.prototype.push = function(e, t, n) {
                    return t || n ? f.call(this, e, t, n) : f.call(this, e).catch((e => e))
                }, y.Ay.prototype.replace = function(e, t, n) {
                    return t || n ? T.call(this, e, t, n) : T.call(this, e).catch((e => e))
                };
                var g = h;
                const v = {
                    walletAddress: e => e.wallet.walletAddress,
                    connectWalletType: e => e.wallet.connectWalletType,
                    isConnectWallet: e => e.wallet.isConnectWallet,
                    currentNetworkID: e => e.wallet.currentNetworkID,
                    net: e => e.wallet.net,
                    gasPrice: e => e.wallet.gasPrice,
                    slippage: e => e.wallet.slippage,
                    deadline: e => e.wallet.deadline,
                    multipath: e => e.wallet.multipath,
                    transactions: e => e.wallet.transactions,
                    block: e => e.wallet.block,
                    screenWidth: e => e.wallet.screenWidth
                };
                var b = v,
                    w = n(2642);
                const S = {
                        walletAddress: "",
                        connectWalletType: "",
                        isConnectWallet: !1,
                        currentNetworkID: 7234,
                        net: 0,
                        gasPrice: 1e10,
                        slippage: .5,
                        deadline: 20,
                        multipath: !1,
                        transactions: {},
                        block: 0,
                        screenWidth: 1920
                    },
                    C = {
                        SET_WALLETADDRESS(e, t) {
                            e.walletAddress = t
                        },
                        SET_CONNECTWALLETTYPE(e, t) {
                            e.connectWalletType = t
                        },
                        SET_CONNECTWALLET(e, t) {
                            e.isConnectWallet = t
                        },
                        SET_CURRENTNETWORKID(e, t) {
                            e.currentNetworkID = t
                        },
                        SETBLOCK: (e, t) => {
                            e.block = t
                        },
                        DELETETRANSACTIONS: e => {
                            e.transactions = {}
                        },
                        SETTRANSACTIONS: (e, t) => {
                            let n = JSON.parse(JSON.stringify(e.transactions, w.gn));
                            n[t.hash] = t, e.transactions = n
                        },
                        SETTRANSACTIONSRECEIPT: (e, t) => {
                            let n = JSON.parse(JSON.stringify(e.transactions, w.gn));
                            n[t.hash].receipt = t.receipt, e.transactions = n
                        },
                        SETNET: (e, t) => {
                            e.net = t
                        },
                        SET_GASPRICE(e, t) {
                            e.gasPrice = t
                        },
                        SET_SLIPPAGE(e, t) {
                            e.slippage = t
                        },
                        SET_DEADLINE(e, t) {
                            e.deadline = t
                        },
                        SET_MULTIPATH(e, t) {
                            e.multipath = t
                        },
                        SET_SCREENWIDTH(e, t) {
                            e.screenWidth = t
                        }
                    },
                    k = {
                        setWalletAddress({
                            commit: e
                        }, t) {
                            e("SET_WALLETADDRESS", t)
                        },
                        setConnectWalletType({
                            commit: e
                        }, t) {
                            e("SET_CONNECTWALLETTYPE", t)
                        },
                        setConnectWallet({
                            commit: e
                        }, t) {
                            e("SET_CONNECTWALLET", t)
                        },
                        setCurrentNetworkID({
                            commit: e
                        }, t) {
                            e("SET_CURRENTNETWORKID", t)
                        },
                        setBlock({
                            commit: e
                        }, t) {
                            e("SETBLOCK", t)
                        },
                        deleteTransactions({
                            commit: e
                        }, t) {
                            e("DELETETRANSACTIONS", t)
                        },
                        setTransactions({
                            commit: e
                        }, t) {
                            e("SETTRANSACTIONS", t)
                        },
                        setTransactionsReceipt({
                            commit: e
                        }, t) {
                            e("SETTRANSACTIONSRECEIPT", t)
                        },
                        setNet({
                            commit: e
                        }, t) {
                            e("SETNET", t)
                        },
                        setGasPrice({
                            commit: e
                        }, t) {
                            e("SET_GASPRICE", t)
                        },
                        setSlippage({
                            commit: e
                        }, t) {
                            e("SET_SLIPPAGE", t)
                        },
                        setDeadline({
                            commit: e
                        }, t) {
                            e("SET_DEADLINE", t)
                        },
                        setMultipath({
                            commit: e
                        }, t) {
                            e("SET_MULTIPATH", t)
                        },
                        setScreenWidth({
                            commit: e
                        }, t) {
                            e("SET_SCREENWIDTH", t)
                        }
                    };
                var M = {
                    namespaced: !0,
                    state: S,
                    mutations: C,
                    actions: k
                };
                a["default"].use(r.Ay);
                const x = new r.Ay.Store({
                    modules: {
                        wallet: M
                    },
                    getters: b
                });
                var A = x,
                    E = n(57877),
                    P = n.n(E),
                    I = n(80245),
                    N = n(57652),
                    _ = n(41137),
                    W = {
                        en: N["default"],
                        zh: _["default"]
                    };
                a["default"].use(I.A);
                const L = new I.A({
                    locale: sessionStorage.getItem("lang") || "en",
                    messages: W,
                    silentTranslationWarn: !0
                });
                var D = L,
                    O = n(61093),
                    R = n.n(O),
                    B = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "header"
                        }, [t("div", {
                            staticClass: "content"
                        }, [t("a", {
                            staticClass: "navLeft"
                        }, [t("img", {
                            attrs: {
                                src: n(77710),
                                alt: "logo"
                            },
                            on: {
                                click: function(t) {
                                    return e.handleChangeNavItemMethod(-1)
                                }
                            }
                        })]), t("div", {
                            staticClass: "navMiddle"
                        }, [t("div", {
                            ref: "navMiddleRef",
                            staticClass: "navMiddleRight"
                        }, [t("div", {
                            style: 0 === e.topNavKey ? {
                                color: "var(--white)",
                                fontSize: "16px"
                            } : {
                                color: "#777"
                            },
                            on: {
                                click: function(t) {
                                    return e.handleChangeNavItemMethod(0)
                                }
                            }
                        }, [e._v(" " + e._s(e.$t("message.mallHeader.Trade")) + " ")]), t("div", {
                            style: 1 === e.topNavKey ? {
                                color: "var(--white)",
                                fontSize: "16px"
                            } : {
                                color: "#777"
                            },
                            on: {
                                click: function(t) {
                                    return e.handleChangeNavItemMethod(1)
                                }
                            }
                        }, [e._v(" " + e._s(e.$t("message.mallHeader.Earn")) + " ")]), t("div", {
                            style: 2 === e.topNavKey ? {
                                color: "var(--white)",
                                fontSize: "16px"
                            } : {
                                color: "#777"
                            },
                            on: {
                                click: function(t) {
                                    return e.handleContactClick(99)
                                }
                            }
                        }, [e._v(" " + e._s(e.$t("message.mallHeader.Explore")) + " ")]), t("i", {
                            staticClass: "nav_underline",
                            class: -1 === e.topNavKey ? "nav_underline1" : "",
                            style: e.navLineStyle
                        })])]), t("div", {
                            staticClass: "navRight"
                        }, [t("div", {
                            staticClass: "nr_featch",
                            on: {
                                click: e.openFeachUrl
                            }
                        }, [t("img", {
                            attrs: {
                                src: n(5175),
                                alt: "logo"
                            }
                        })]), t("div", {
                            staticClass: "nr_right_price"
                        }, [t("img", {
                            attrs: {
                                src: n(25149),
                                alt: "logo"
                            }
                        }), t("span", [e._v(e._s(e.isConnectWallet ? e.iniPrice : 0))])]), t("div", {
                            staticClass: "nr_chain_nework",
                            on: {
                                click: e.handleNavSwitchNetwork
                            }
                        }, [t("div", {
                            staticClass: "icon_network"
                        }, [e.chainNetworkError ? t("img", {
                            attrs: {
                                src: n(5455),
                                alt: "logo"
                            }
                        }) : t("img", {
                            attrs: {
                                src: n(75672),
                                alt: "logo"
                            }
                        })]), t("div", {
                            staticClass: "chain_name"
                        }, [t("span", [e._v(e._s(e.getSelectedNetworkName()))])]), e._m(0)]), t("div", {
                            staticClass: "nr_right_dk",
                            on: {
                                click: e.handleWallOperate
                            }
                        }, [t("img", {
                            attrs: {
                                src: n(46386),
                                alt: "logo"
                            }
                        }), t("span", [e._v(" " + e._s(e.isConnectWallet ? e.screenWidth <= 768 ? e.omitCharacters(e.walletAddress, 4) : e.omitCharacters(e.walletAddress, 7) : e.$t("message.mallHeader.connect")))])])])])])
                    },
                    F = [function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "icon_tip"
                        }, [t("img", {
                            attrs: {
                                src: n(76730),
                                alt: "logo"
                            }
                        })])
                    }],
                    q = (n(30381), n(62420), n(72708)),
                    $ = n(15260),
                    H = n(72403),
                    U = n(34492),
                    Y = n(77662),
                    G = (n(44602), n(50223));
                const j = n(53272);
                var K = {
                        data() {
                            return {
                                showPopover: !1,
                                showMetaPopover: !1,
                                showLangPopover: !1,
                                showMorePopover: !1,
                                topNavKey: -1,
                                isEnglish: !1,
                                showConnectMaks: !1,
                                showDisconnectMaks: !1,
                                navItemDistanceLeftStyle: 0,
                                countTimer: null,
                                walletConnector: null,
                                iniPrice: 0,
                                isSubscribed: !1,
                                chainNetworkError: !1
                            }
                        },
                        created() {
                            const e = this;
                            this.$eventBus.$on("setWallet", (function() {
                                e.handleWallOperate()
                            }))
                        },
                        mounted() {
                            const e = sessionStorage.getItem("topNFTMallNavKey");
                            e && (this.topNavKey = parseInt(e)), this.isEnglish = "zh" !== sessionStorage.getItem("lang"), this.handleGetNavItemStyle(this.topNavKey), this.initlizationWalletStatus()
                        },
                        destroyed() {},
                        computed: {
                            ...(0, r.L8)(["screenWidth"]),
                            currentNetworkID: {
                                get() {
                                    return this.$store.getters.currentNetworkID
                                },
                                set(e) {
                                    this.$store.dispatch("wallet/setCurrentNetworkID", e)
                                }
                            },
                            connectWalletType: {
                                get() {
                                    return this.$store.getters.connectWalletType
                                },
                                set(e) {
                                    this.$store.dispatch("wallet/setConnectWalletType", e)
                                }
                            },
                            isConnectWallet: {
                                get() {
                                    return this.$store.getters.isConnectWallet
                                },
                                set(e) {
                                    this.$store.dispatch("wallet/setConnectWallet", e)
                                }
                            },
                            walletAddress: {
                                get() {
                                    return this.$store.getters.walletAddress
                                },
                                set(e) {
                                    this.$store.dispatch("wallet/setWalletAddress", e)
                                }
                            },
                            navLineStyle() {
                                return {
                                    left: `${this.navItemDistanceLeftStyle}px`
                                }
                            }
                        },
                        watch: {
                            isConnectWallet(e, t) {
                                e ? this.openTimer() : (this.closeTimer(), o.Ay.disconnectWallet()), this.$store.dispatch("wallet/setConnectWallet", e)
                            },
                            currentNetworkID(e, t) {
                                e !== t && (o.Ay.getWeb3ModalProvider(!0), this.$store.dispatch("wallet/setCurrentNetworkID", e))
                            },
                            $route(e, t) {
                                let n = "";
                                "home" === e.name ? n = -1 : "swap" === e.name ? n = 0 : "liquidity" === e.name ? n = 1 : "win" === e.name ? n = 2 : "meta" === e.name && (n = 3), this.topNavKey = n, this.handleGetNavItemStyle(n), sessionStorage.setItem("topNFTMallNavKey", n)
                            },
                            "$i18n.locale"(e, t) {
                                this.isEnglish = "zh" !== e;
                                let n = sessionStorage.getItem("topNFTMallNavKey");
                                this.handleGetNavItemStyle(n)
                            }
                        },
                        methods: {
                            initlizationWalletStatus() {
                                setTimeout((async () => {
                                    try {
                                        const e = o.Ay.getInitGlobalWeb3Modal();
                                        this.addWeb3ModalChangeSubscribe(e)
                                    } catch (e) {
                                        this.$notify({
                                            message: this.$t(e.message) || this.$t(e.err.message),
                                            duration: 2500,
                                            showClose: !1,
                                            customClass: "notifyClass"
                                        })
                                    }
                                }), 500)
                            },
                            savewalletConnectAction() {
                                Y.I.set("connection_meta", {
                                    disconnect: !this.isConnectWallet,
                                    rdns: this.connectWalletType
                                })
                            },
                            mouseEnter(e) {
                                if (this.screenWidth < 960) return;
                                this.showPopover = !0;
                                let t = this;
                                0 === e && (t.showMetaPopover = t.showPopover), 1 === e && (t.showLangPopover = t.showPopover), 2 === e && (t.showMorePopover = t.showPopover)
                            },
                            mouseLeave(e) {
                                if (this.screenWidth < 960) return;
                                this.showPopover = !1;
                                let t = this;
                                setTimeout((function() {
                                    0 === e && (t.showMetaPopover = t.showPopover), 1 === e && (t.showLangPopover = t.showPopover), 2 === e && (t.showMorePopover = t.showPopover)
                                }), 100)
                            },
                            omitCharacters(e, t) {
                                const n = e.substring(0, 5) + "..." + e.substring(e.length - t);
                                return n
                            },
                            handleDropdownCommand(e) {
                                let t;
                                "en" === e ? (t = "en", this.isEnglish = !0) : "zh" === e && (t = "zh", this.isEnglish = !1), this.$i18n.locale = t, this.showLangPopover = !1, sessionStorage.setItem("lang", t)
                            },
                            async handleNavSwitchNetwork() {
                                const e = o.Ay.getInitGlobalWeb3Modal();
                                await e.open({
                                    view: "Networks"
                                })
                            },
                            async handleWallOperate() {
                                try {
                                    const e = o.Ay.getInitGlobalWeb3Modal();
                                    this.isConnectWallet ? await e.open({
                                        view: "Account"
                                    }) : await e.open({
                                        view: "Connect"
                                    })
                                } catch (e) {
                                    console.log("error message =", e), this.$notify({
                                        message: this.$t(e.message) || this.$t(e.err.message),
                                        duration: 2500,
                                        showClose: !1,
                                        customClass: "notifyClass"
                                    })
                                }
                            },
                            handleDebounceChainID(e) {
                                this.currentNetworkID = e, this.chainNetworkError = !G.x9.includes(e)
                            },
                            addWeb3ModalChangeSubscribe(e) {
                                if (this.isSubscribed) return;
                                const t = (0, w.sg)(this.handleDebounceChainID, 300),
                                    n = async t => {
                                        const {
                                            caipAddress: n,
                                            address: a,
                                            isConnected: i,
                                            status: s
                                        } = t;
                                        i && a ? (this.walletAddress = a, this.isConnectWallet = !0) : (this.handleConfirmDisconnect(), this.chainNetworkError && e.switchNetwork(G.id))
                                    }, a = async n => {
                                        const {
                                            caipNetwork: a,
                                            chainId: i,
                                            caipNetworkId: s
                                        } = n;
                                        this.chainNetworkError = !G.x9.includes(i);
                                        const o = e.getWalletProvider();
                                        if (o) {
                                            const e = await new q.Ay$(o).eth.getChainId();
                                            t(Number(e))
                                        } else this.currentNetworkID = i
                                    };
                                e.subscribeAccount(n), e.subscribeNetwork(a), this.isSubscribed = !0
                            },
                            handleConfirmDisconnect() {
                                this.walletAddress = "", this.connectWalletType = "", this.isConnectWallet = !1, this.showDisconnectMaks = !1
                            },
                            getSelectedNetworkName() {
                                const e = this.currentNetworkID;
                                if (G.x9.includes(e)) {
                                    const t = G.uf.find((t => t.chainId === e));
                                    return t.chainName
                                }
                                return "Network Error"
                            },
                            handleDisWallOperate() {
                                this.isConnectWallet ? this.showDisconnectMaks = !1 : this.showConnectMaks = !1
                            },
                            openTimer() {
                                const e = this;
                                e.getPrice(), e.closeTimer(), e.countTimer = setInterval((() => {
                                    e.getPrice()
                                }), 3e3)
                            },
                            closeTimer() {
                                this.countTimer && (clearInterval(this.countTimer), this.countTimer = null, this.price = 0)
                            },
                            openFeachUrl() {
                                window.open("https://faucet-testnet.inichain.com")
                            },
                            handleGetNavItemStyle(e) {
                                if (e < 0) return void(this.navItemDistanceLeftStyle = 0);
                                if (this.screenWidth < 960) return;
                                const t = this;
                                this.$nextTick((() => {
                                    let n = t.$refs.navMiddleRef.childNodes,
                                        a = n[e].clientWidth,
                                        i = 0;
                                    if (e > 0) {
                                        for (let t = 0; t < e; t++) i += n[t].clientWidth + 50;
                                        i += (a - 44) / 2
                                    } else i = (a - 44) / 2;
                                    t.navItemDistanceLeftStyle = i
                                }))
                            },
                            handleChangeNavItemMethod(e) {
                                -1 === e ? this.$router.push("/") : 0 === e ? this.$router.push({
                                    name: "swap"
                                }) : 1 === e && this.$router.push({
                                    name: "liquidity"
                                }), this.topNavKey = e, this.handleGetNavItemStyle(e), sessionStorage.setItem("topNFTMallNavKey", e)
                            },
                            handleContactClick(e) {
                                let t = "";
                                99 === e && (t = j.infoMarket), window.open(t)
                            },
                            async getPrice() {
                                if (this.isConnectWallet && G.x9.includes(this.currentNetworkID)) try {
                                    let e = (0, $.C_)(1, 18),
                                        t = [(0, U.FI)(), (0, U.TV)()];
                                    const n = await (0, H._g)().methods.getAmountsOut(e, t).call();
                                    this.iniPrice = (0, $.Mg)((0, $.ej)(n[1]), 2)
                                } catch (e) {
                                    console.log("get ini price error =", e)
                                } else this.iniPrice = 0
                            }
                        }
                    },
                    z = K,
                    J = (0, p.A)(z, B, F, !1, null, "9fdf0c42", null),
                    V = J.exports;
                const X = {
                    install(e) {
                        e.component("zoonHeader", V)
                    }
                };
                var Q, Z, ee = X,
                    te = {},
                    ne = (0, p.A)(te, Q, Z, !1, null, null, null),
                    ae = ne.exports;
                const ie = {
                    install(e) {
                        e.component("zoonFooter", ae)
                    }
                };
                var se = ie,
                    oe = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "bottombar"
                        }, [t("van-tabbar", {
                            attrs: {
                                fixed: !1,
                                route: "",
                                "before-change": e.beforeChange
                            },
                            on: {
                                change: e.onChange
                            },
                            model: {
                                value: e.active,
                                callback: function(t) {
                                    e.active = t
                                },
                                expression: "active"
                            }
                        }, [e._l(e.tabBars, (function(n, a) {
                            return [3 === a ? t("van-popover", {
                                attrs: {
                                    offset: [0, 20],
                                    placement: "top"
                                },
                                scopedSlots: e._u([{
                                    key: "reference",
                                    fn: function() {
                                        return [t("van-tabbar-item", {
                                            key: n.name,
                                            attrs: {
                                                badge: n.badge,
                                                dot: n.isShowRedDot,
                                                to: n.name,
                                                replace: ""
                                            },
                                            scopedSlots: e._u([{
                                                key: "icon",
                                                fn: function(e) {
                                                    return [t("img", {
                                                        staticClass: "img_icon",
                                                        attrs: {
                                                            src: e.active ? n.selectedIconPath : n.iconPath,
                                                            alt: "icon"
                                                        }
                                                    })]
                                                }
                                            }], null, !0)
                                        }, [t("span", [e._v(e._s(n.text))])])]
                                    },
                                    proxy: !0
                                }], null, !0),
                                model: {
                                    value: e.showMetaPopover,
                                    callback: function(t) {
                                        e.showMetaPopover = t
                                    },
                                    expression: "showMetaPopover"
                                }
                            }, [t("div", [t("div", {
                                staticClass: "van-popover__action"
                            }, [t("div", {
                                staticClass: "van-popover__action-text van-hairline--bottom"
                            }, [e._v("OMC")])]), t("div", {
                                staticClass: "van-popover__action"
                            }, [t("div", {
                                staticClass: "van-popover__action-text van-hairline--bottom"
                            }, [e._v("ALADIN")])]), t("div", {
                                staticClass: "van-popover__action"
                            }, [t("div", {
                                staticClass: "van-popover__action-text van-hairline--bottom"
                            }, [e._v("Game")])]), t("div", {
                                staticClass: "van-popover__action"
                            }, [t("div", {
                                staticClass: "van-popover__action-text van-hairline--bottom"
                            }, [e._v("Website")])])])]) : 4 === a ? t("van-popover", {
                                attrs: {
                                    offset: [0, 20],
                                    placement: "top"
                                },
                                scopedSlots: e._u([{
                                    key: "reference",
                                    fn: function() {
                                        return [t("van-tabbar-item", {
                                            key: n.name,
                                            attrs: {
                                                badge: n.badge,
                                                dot: n.isShowRedDot,
                                                to: n.name,
                                                replace: ""
                                            },
                                            scopedSlots: e._u([{
                                                key: "icon",
                                                fn: function(e) {
                                                    return [t("img", {
                                                        staticClass: "img_icon",
                                                        attrs: {
                                                            src: e.active ? n.selectedIconPath : n.iconPath,
                                                            alt: "icon"
                                                        }
                                                    })]
                                                }
                                            }], null, !0)
                                        }, [t("span", [e._v(e._s(n.text))])])]
                                    },
                                    proxy: !0
                                }], null, !0),
                                model: {
                                    value: e.showMorePopover,
                                    callback: function(t) {
                                        e.showMorePopover = t
                                    },
                                    expression: "showMorePopover"
                                }
                            }, [t("div", [t("div", {
                                staticClass: "van-popover__action"
                            }, [t("div", {
                                staticClass: "van-popover__action-text van-hairline--bottom"
                            }, [e._v(e._s(e.$t("message.mallHeader.Cooperate")))])]), t("div", {
                                staticClass: "van-popover__action"
                            }, [t("div", {
                                staticClass: "van-popover__action-text van-hairline--bottom"
                            }, [e._v(e._s(e.$t("message.mallHeader.Guide")))])])])]) : t("van-tabbar-item", {
                                key: n.name,
                                attrs: {
                                    badge: n.badge,
                                    dot: n.isShowRedDot,
                                    to: n.name,
                                    replace: ""
                                },
                                scopedSlots: e._u([{
                                    key: "icon",
                                    fn: function(e) {
                                        return [t("img", {
                                            staticClass: "img_icon",
                                            attrs: {
                                                src: e.active ? n.selectedIconPath : n.iconPath,
                                                alt: "icon"
                                            }
                                        })]
                                    }
                                }], null, !0)
                            }, [t("span", [e._v(e._s(n.text))])])]
                        }))], 2)], 1)
                    },
                    re = [];
                const le = n(53272);
                var ue = {
                        name: "bottombar",
                        props: {
                            selected: {
                                type: Number,
                                default: 0
                            },
                            color: {
                                type: String,
                                default: "#777"
                            },
                            selectedColor: {
                                type: String,
                                default: "#FFC801"
                            },
                            tabBars: {
                                type: Array,
                                default: () => []
                            }
                        },
                        data() {
                            return {
                                active: 0,
                                showMetaPopover: !1,
                                showMorePopover: !1
                            }
                        },
                        methods: {
                            beforeChange(e) {
                                let t = !0;
                                if (2 === e) {
                                    const e = le.infoMarket;
                                    window.open(e), t = !1
                                } else(3 === e || 4 === e) && (t = !1);
                                return t
                            },
                            onChange(e) {
                                this.active = e
                            }
                        }
                    },
                    pe = ue,
                    de = (0, p.A)(pe, oe, re, !1, null, "62572cf0", null),
                    ce = de.exports;
                const ye = {
                    install(e) {
                        e.component("bottomBar", ce)
                    }
                };
                var me = ye,
                    he = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.isShowAnnouncement,
                                expression: "isShowAnnouncement"
                            }],
                            staticClass: "announcement"
                        }, [t("div", {
                            staticClass: "content"
                        }, [t("div"), t("div", {
                            staticClass: "a_c_text"
                        }, [e._v(e._s(e.announcementData.content))]), t("img", {
                            attrs: {
                                alt: "logo",
                                src: n(25468)
                            },
                            on: {
                                click: e.handleClickCloseAnnouncement
                            }
                        })])])
                    },
                    fe = [],
                    Te = n(86205),
                    ge = {
                        data() {
                            return {
                                isEnglish: !1,
                                isShowAnnouncement: !1,
                                announcementData: ""
                            }
                        },
                        created() {
                            this.isEnglish = "zh" !== sessionStorage.getItem("lang"), this.getAnnouncementData()
                        },
                        mounted() {
                            this.$route.name;
                            this.isShowAnnouncement = !0, this.getAnnouncementData()
                        },
                        destroyed() {},
                        computed: {},
                        watch: {
                            $route(e, t) {},
                            "$i18n.locale"(e, t) {
                                this.isEnglish = "zh" !== e, this.getAnnouncementData(), console.log("监听语言发生变化")
                            }
                        },
                        methods: {
                            handleClickCloseAnnouncement() {
                                this.isShowAnnouncement = !1
                            },
                            async getAnnouncementData() {
                                const e = {},
                                    t = await (0, Te.c)(e);
                                t.notices.length > 0 && (this.announcementData = this.isEnglish ? t.notices[0].en : t.notices[0].ch)
                            }
                        }
                    },
                    ve = ge,
                    be = (0, p.A)(ve, he, fe, !1, null, "71d50359", null),
                    we = be.exports;
                const Se = {
                    install(e) {
                        e.component("announcement", we)
                    }
                };
                var Ce = Se,
                    ke = new a["default"],
                    Me = ke;
                n(76133);
                async function xe(e, t) {
                    const n = BNB;
                    if (this.showBnb) {
                        if (e) {
                            const t = await simpleRpcProvider.eth.getBalance(e);
                            n.balance = formatAmount(t)
                        }
                        return [n, ...t]
                    }
                    return t
                }
                async function Ae(e, t) {
                    if (e) {
                        const n = t.map((t => {
                                const n = getErc20Contract(t.address);
                                return n.methods.balanceOf(e).call()
                            })),
                            a = await Promise.all(n);
                        return t.map(((e, t) => ({
                            ...e,
                            balance: formatAmount(a[t], e.decimals)
                        })))
                    }
                    return t.map((e => ({
                        ...e,
                        balance: ""
                    })))
                }
                var Ee = {
                        getBnbBalance: xe,
                        getTokensBalance: Ae
                    },
                    Pe = n(84179),
                    Ie = (n(66671), n(15671), n(329)),
                    Ne = function() {
                        var e = this,
                            t = e._self._c;
                        return t("transition", {
                            attrs: {
                                name: "m-message-fade",
                                mode: "in-out"
                            }
                        }, [t("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.show,
                                expression: "show"
                            }],
                            staticClass: "m-message-wrapper",
                            class: ["m-message-wrapper", e.wrapperClassName, e.pc ? "pc-message-wrapper" : ""],
                            style: {
                                width: e.width
                            }
                        }, [t("message", {
                            class: [e.type && "m-message--" + e.type, e.className],
                            attrs: {
                                content: e.message,
                                hash: e.hash,
                                closable: e.showClose,
                                "is-collapsed": e.isCollapsed,
                                collapsable: e.collapsable,
                                "close-handler": e.close,
                                title: e.title,
                                supportHTML: e.supportHTML
                            },
                            nativeOn: {
                                mouseenter: function(t) {
                                    return e.clearTimer.apply(null, arguments)
                                },
                                mouseleave: function(t) {
                                    return e.startTimer.apply(null, arguments)
                                }
                            }
                        })], 1)])
                    },
                    _e = [],
                    We = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.visible,
                                expression: "visible"
                            }],
                            staticClass: "m-message"
                        }, [t("div", {
                            staticClass: "toastbox"
                        }, [e._m(0), t("div", {
                            staticClass: "rightBox"
                        }, [t("div", {
                            staticClass: "content"
                        }, [e.content ? t("div", {
                            staticClass: "data"
                        }, [e._v(e._s(e.content))]) : e._e(), t("div", {
                            staticClass: "scan",
                            on: {
                                click: function(t) {
                                    return e.viewHash(e.hash)
                                }
                            }
                        })]), t("div", {
                            staticClass: "closeBox"
                        }, [t("img", {
                            attrs: {
                                alt: "",
                                src: n(18730)
                            },
                            on: {
                                click: e.handleClose
                            }
                        })])])])])
                    },
                    Le = [function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "iconBox"
                        }, [t("img", {
                            attrs: {
                                src: n(7012),
                                alt: "logo"
                            }
                        })])
                    }],
                    De = n(40230),
                    Oe = {
                        name: "message",
                        props: {
                            iconImg: String,
                            closable: Boolean,
                            closeHandler: Function,
                            title: String,
                            content: String,
                            supportHTML: Boolean,
                            isCollapsed: {
                                type: Boolean,
                                default: !0
                            },
                            collapsable: {
                                type: Boolean,
                                default: !0
                            },
                            hash: String
                        },
                        data() {
                            return {
                                visible: !0,
                                collapsed: this.isCollapsed
                            }
                        },
                        methods: {
                            viewHash: De.sr,
                            triggerCollapse() {
                                this.collapsed = !this.collapsed
                            },
                            close() {
                                this.visible = !1
                            },
                            handleClose() {
                                "function" === typeof this.closeHandler ? this.closeHandler(this.close) : this.close()
                            }
                        }
                    },
                    Re = Oe,
                    Be = (0, p.A)(Re, We, Le, !1, null, "0df13e2f", null),
                    Fe = Be.exports,
                    qe = {
                        name: "messageTemplate",
                        components: {
                            message: Fe
                        },
                        data() {
                            return {
                                show: !1,
                                type: "info",
                                iconImg: "",
                                title: "",
                                message: "",
                                duration: 3e3,
                                showClose: !1,
                                isCollapsed: !1,
                                collapsable: !0,
                                width: "",
                                className: "",
                                wrapperClassName: "",
                                supportHTML: !1,
                                onClose: null,
                                timer: null,
                                closed: !1,
                                hash: "",
                                pc: !1
                            }
                        },
                        watch: {
                            closed(e) {
                                e && (this.show = !1, this.$el.addEventListener("animationend", this.destroyElement))
                            }
                        },
                        methods: {
                            close() {
                                this.closed = !0, "function" === typeof this.onClose && this.onClose(this)
                            },
                            clearTimer() {
                                clearTimeout(this.timer)
                            },
                            startTimer() {
                                this.duration > 0 && "loading" !== this.type && (this.timer = setTimeout((() => {
                                    this.closed || this.close()
                                }), this.duration))
                            },
                            destroyElement() {
                                this.$el.removeEventListener("transitionend", this.destroyElement), this.$destroy(!0), this.$el.parentNode.removeChild(this.$el)
                            }
                        },
                        mounted() {
                            "loading" !== this.type && (this.startTimer(), this.duration <= 0 && (this.showClose = !0))
                        }
                    },
                    $e = qe,
                    He = (0, p.A)($e, Ne, _e, !1, null, null, null),
                    Ue = He.exports;
                const Ye = a["default"].extend(Ue),
                    Ge = [];
                let je = 1;
                const Ke = {},
                    ze = {},
                    Je = function(e) {
                        e = {
                            ...ze,
                            ...e
                        };
                        let t = e.onClose;
                        const n = e.position || "top-center",
                            a = e.hasMask || !1,
                            i = n + (a ? "-mask" : "");
                        let s = Ke[i];
                        s || (s = Ke[i] = document.createElement("div"), s.className = ["m-message-container", "is-" + n, a ? "has-mask" : ""].filter((function(e) {
                            return !!e
                        })).join(" "), document.body.appendChild(s)), e.zIndex && (s.style.zIndex = e.zIndex);
                        const o = je++;
                        e.onClose = function() {
                            Je.close(o, t)
                        };
                        const r = new Ye({
                            el: document.createElement("div"),
                            data: e
                        });
                        return r.id = o, r.containerKey = i, 0 === n.indexOf("bottom") && s.firstChild ? s.insertBefore(r.$el, s.firstChild) : s.appendChild(r.$el), r.show = !0, Ge.push(r), r
                    };
                Je.close = function(e, t) {
                    for (let n = 0, a = Ge.length; n < a; n++)
                        if (e === Ge[n].id) {
                            const {
                                containerKey: e,
                                hasMask: a
                            } = Ge[n];
                            "function" === typeof t && t(Ge[n]), Ge[n] = null, Ge.splice(n, 1), a && setTimeout((function() {
                                const t = Ge.filter((t => t.containerKey === e)).length;
                                0 === t && Ke[e] && (Ke[e].remove(), Ke[e] = null)
                            }), 300);
                            break
                        } setTimeout((function() {
                        if (0 === Ge.length)
                            for (let e in Ke) Ke[e] && (Ke[e].remove(), Ke[e] = null)
                    }), 3e3)
                }, Je.closeAll = function() {
                    for (let e = Ge.length - 1; e >= 0; e--) Ge[e].close()
                }, Je.globals = {
                    options: ze
                };
                const Ve = ["info", "success", "error", "warning", "loading"];
                Ve.forEach((e => {
                    Je[e] = function(t) {
                        return t = "string" === typeof t ? {
                            message: t
                        } : t, Je({
                            ...t,
                            type: e
                        })
                    }
                }));
                var Xe = Je;
                Xe.install = function(e, t) {
                    e.use(I.A);
                    const a = new I.A({
                        locale: "en",
                        messages: {
                            zh: n(41137),
                            en: n(57652)
                        }
                    });
                    e.prototype._i18n = a, t && t.name ? e.prototype[`$${t.name}`] = Xe : e.prototype.$message = Xe
                };
                var Qe = Xe,
                    Ze = n(16070),
                    et = n.n(Ze);
                a["default"].config.productionTip = !1, a["default"].prototype.$QS = P(), a["default"].prototype.$eventBus = Me, a["default"].prototype.$decentralized = Ee, a["default"].use(Ie.Ay, {
                    directive: "tippy",
                    flipDuration: 0,
                    interactive: !0,
                    popperOptions: {
                        modifiers: {
                            preventOverflow: {
                                enabled: !1
                            },
                            hide: {
                                enabled: !1
                            }
                        }
                    }
                }), a["default"].component("tippy", Ie.Cg), a["default"].use(Pe.Ay), a["default"].use(R()), a["default"].use(ee), a["default"].use(se), a["default"].use(Ce), a["default"].use(me), a["default"].use(Qe), a["default"].use(et()), new a["default"]({
                    router: g,
                    store: A,
                    i18n: D,
                    render: e => e(c)
                }).$mount("#app")
            },
            53272: function(e) {
                e.exports = {
                    name: "ObsSwap",
                    baseOneURL: "https://unpkg.com/",
                    pioneerRPC: "http://rpc-testnet.iniscan.com",
                    pioneerScan: "https://testnet.iniscan.com",
                    genesisRPC: "http://rpc-testnet.inichain.com",
                    genesisScan: "https://genesis-testnet.iniscan.com",
                    walletConnectBridge: "https://bridge.walletconnect.org",
                    infoMarket: "https://testinfo.obsswap.org"
                }
            },
            34492: function(e, t, n) {
                "use strict";
                n.d(t, {
                    Ch: function() {
                        return p
                    },
                    FI: function() {
                        return d
                    },
                    P3: function() {
                        return u
                    },
                    TV: function() {
                        return c
                    }
                });
                var a = n(87275);
                const i = {
                        v2Router: "0x7BEf93022D48b9df745B77D0Fd348fB415b026e2",
                        v2Factory: "0x18790F963c221b002A6A8405Ce6e7b86A8ceaF11",
                        WINI: "0x9e66cd15226464EFBa8b7B2847A0880AFC236c5C",
                        USDT: "0x36AA81a7aEeAB8f09e154d3E779Bb81beA54501A",
                        TOKEN: "0xcF259Bca0315C6D32e877793B6a10e97e7647FdE"
                    },
                    s = {
                        v2Router: "0x4ccB784744969D9B63C15cF07E622DDA65A88Ee7",
                        v2Factory: "0x95eB95F6917Cac722d3638aDe3BdAd6B21FeBF45",
                        WINI: "0xfbECae21C91446f9c7b87E4e5869926998f99ffe",
                        USDT: "0xcF259Bca0315C6D32e877793B6a10e97e7647FdE",
                        TOKEN: ""
                    },
                    o = {
                        233: i,
                        7234: s
                    },
                    r = () => {
                        const e = (0, a.F2)();
                        return o[e] || {}
                    },
                    l = e => {
                        const t = r();
                        return t[e] || null
                    },
                    u = () => l("v2Factory"),
                    p = () => l("v2Router"),
                    d = () => l("WINI"),
                    c = () => l("USDT")
            },
            40230: function(e, t, n) {
                "use strict";
                n.d(t, {
                    Vu: function() {
                        return r
                    },
                    nP: function() {
                        return l
                    },
                    sr: function() {
                        return o
                    }
                });
                var a = n(87275),
                    i = n(50223);
                const s = () => i.A$[(0, a.F2)()],
                    o = e => {
                        window.open(`${s()}/tx/` + e)
                    },
                    r = e => {
                        window.open(`${s()}/token/` + e)
                    },
                    l = async e => {
                        const t = e,
                            n = "BIGSWAP-LP",
                            a = 18,
                            i = "";
                        try {
                            const e = await window.ethereum.request({
                                method: "wallet_watchAsset",
                                params: {
                                    type: "ERC20",
                                    options: {
                                        address: t,
                                        symbol: n,
                                        decimals: a,
                                        image: i
                                    }
                                }
                            });
                            e ? console.log("Thanks for your interest!") : console.log("Your loss!")
                        } catch (s) {
                            console.log(s)
                        }
                    }
            },
            72403: function(e, t, n) {
                "use strict";
                n.d(t, {
                    H7: function() {
                        return d
                    },
                    RY: function() {
                        return y
                    },
                    di: function() {
                        return m
                    },
                    _g: function() {
                        return c
                    },
                    dI: function() {
                        return h
                    }
                });
                var a = n(87275),
                    i = JSON.parse('[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                    s = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"reserve0","type":"uint112"},{"internalType":"uint112","name":"reserve1","type":"uint112"},{"internalType":"uint32","name":"blockTimestampLast","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"sync","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'),
                    o = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'),
                    r = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]'),
                    l = JSON.parse('[{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"},{"internalType":"address","name":"_admin","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token0","type":"address"},{"indexed":true,"internalType":"address","name":"token1","type":"address"},{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"PairCreated","type":"event"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allPairsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"createPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeTo","type":"address"}],"name":"setFeeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"name":"setFeeToSetter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'),
                    u = n(34492);
                const p = (e, t) => {
                    const n = a.Ay.getWeb3ModalProvider(!1);
                    return new n.eth.Contract(e, t)
                };
                let d = e => p(o, e),
                    c = () => p(i, (0, u.Ch)()),
                    y = () => p(l, (0, u.P3)()),
                    m = e => p(s, e),
                    h = () => p(r, (0, u.FI)())
            },
            15260: function(e, t, n) {
                "use strict";
                n.d(t, {
                    BS: function() {
                        return c
                    },
                    C_: function() {
                        return s
                    },
                    F8: function() {
                        return d
                    },
                    Mg: function() {
                        return l
                    },
                    O: function() {
                        return y
                    },
                    QX: function() {
                        return f
                    },
                    Tv: function() {
                        return m
                    },
                    ej: function() {
                        return o
                    },
                    iE: function() {
                        return p
                    },
                    l4: function() {
                        return h
                    }
                });
                const {
                    utils: a
                } = n(25069), i = n(24512);

                function s(e, t = "18") {
                    return t = parseInt(t), a.parseUnits(l(e, t), t).toString()
                }

                function o(e, t = "18") {
                    return t = parseInt(t), a.formatUnits(e, t).toString()
                }

                function r(e) {
                    return e.replace(/(?:\.0*|(\.\d+?)0+)$/, "$1")
                }

                function l(e, t) {
                    let n = isNaN(e) || !e ? 0 : e,
                        a = isNaN(t) || !t ? 0 : t;
                    n = u(n);
                    const i = (n + "").split(".");
                    let s = i.length > 1 ? i[1] : "";
                    return s.length > a ? s = s.substr(0, a) : s += Array(a - s.length + 1).join("0"), i[0] + ("" === s ? "" : "." + s)
                }

                function u(e) {
                    if (isNaN(e)) return e;
                    const t = String(e);
                    return /e/i.test(t) ? Number(e).toFixed(18).replace(/\.?0+$/, "") : e
                }

                function p(e, t) {
                    if (!e || !t) return 0;
                    const n = new i(e).times(new i(t));
                    return n.toFixed()
                }

                function d(e, t) {
                    if (!e || !t) return 0;
                    const n = new i(e).div(new i(t));
                    return n.toFixed()
                }

                function c(e, t) {
                    const n = new i(e).plus(new i(t));
                    return n.toFixed()
                }

                function y(e, t) {
                    const n = new i(e).minus(new i(t));
                    return n.toFixed()
                }

                function m(e, t) {
                    return new i(e).gt(new i(t))
                }

                function h(e) {
                    return l(p(new i(e), 1.1), 0)
                }

                function f(e, t = 6) {
                    if (!e) return "0";
                    let n = new i(e);
                    if (e = n.toPrecision(t, 1), e.includes("e")) {
                        const [t, n] = e.split("e"), a = Number(n);
                        e = p(new i(t).toString(10), new i(10).pow(a).toString(10))
                    }
                    return r(e)
                }
            },
            77662: function(e, t, n) {
                "use strict";
                n.d(t, {
                    I: function() {
                        return a
                    }
                });
                const a = {
                    set(e, t) {
                        localStorage.setItem(e, JSON.stringify(t))
                    },
                    get(e) {
                        const t = localStorage.getItem(e);
                        return t && "undefined" != t && "null" != t ? JSON.parse(t) : null
                    },
                    remove(e) {
                        localStorage.removeItem(e)
                    }
                }
            },
            2642: function(e, t, n) {
                "use strict";
                n.d(t, {
                    gn: function() {
                        return a
                    },
                    sg: function() {
                        return i
                    }
                });
                n(30381), n(75231), n(26980), n(98872);

                function a(e, t) {
                    return "bigint" === typeof t ? t.toString() : t
                }

                function i(e, t) {
                    let n;
                    return function(...a) {
                        n && clearTimeout(n), n = setTimeout((() => {
                            e.apply(this, a)
                        }), t)
                    }
                }
            },
            25468: function(e, t, n) {
                "use strict";
                e.exports = n.p + "img/icon_announcement_close.d1eeed56.svg"
            },
            13498: function(e, t, n) {
                "use strict";
                e.exports = n.p + "img/tabbar_earn.14d28c81.svg"
            },
            25585: function(e, t, n) {
                "use strict";
                e.exports = n.p + "img/tabbar_earn_2.94252351.svg"
            },
            59254: function(e, t, n) {
                "use strict";
                e.exports = n.p + "img/tabbar_trade.3c4e2ece.svg"
            },
            63781: function(e, t, n) {
                "use strict";
                e.exports = n.p + "img/tabbar_trade_2.9ad91261.svg"
            },
            25886: function(e, t, n) {
                "use strict";
                e.exports = n.p + "img/tabbar_win.608ab137.svg"
            },
            92317: function(e, t, n) {
                "use strict";
                e.exports = n.p + "img/tabbar_win_2.b1d615ef.svg"
            },
            46386: function(e, t, n) {
                "use strict";
                e.exports = n.p + "img/icon_connect_logo.e30089f6.svg"
            },
            76730: function(e, t, n) {
                "use strict";
                e.exports = n.p + "img/icon_down.12566f85.svg"
            },
            75672: function(e, t, n) {
                "use strict";
                e.exports = n.p + "img/icon_genesis.c1fe8fbe.svg"
            },
            77710: function(e, t, n) {
                "use strict";
                e.exports = n.p + "img/icon_head_logo.0be1609e.svg"
            },
            5455: function(e, t, n) {
                "use strict";
                e.exports = n.p + "img/icon_network_error.047c889e.svg"
            },
            25149: function(e, t, n) {
                "use strict";
                e.exports = n.p + "img/icon_price_logo.da43d877.svg"
            },
            7012: function(e, t, n) {
                "use strict";
                e.exports = n.p + "img/icon_message_success.a30b09d9.svg"
            },
            18730: function(e, t, n) {
                "use strict";
                e.exports = n.p + "img/icon_trade_close.97d5708b.svg"
            },
            5175: function(e, t, n) {
                "use strict";
                e.exports = n.p + "img/icon_feach.7d4a7e4d.svg"
            },
            69147: function() {},
            20399: function() {},
            34149: function() {},
            89780: function() {},
            38954: function() {}
        },
        t = {};

    function n(a) {
        var i = t[a];
        if (void 0 !== i) return i.exports;
        var s = t[a] = {
            id: a,
            loaded: !1,
            exports: {}
        };
        return e[a].call(s.exports, s, s.exports, n), s.loaded = !0, s.exports
    }
    n.m = e,
        function() {
            n.amdO = {}
        }(),
        function() {
            var e = [];
            n.O = function(t, a, i, s) {
                if (!a) {
                    var o = 1 / 0;
                    for (p = 0; p < e.length; p++) {
                        a = e[p][0], i = e[p][1], s = e[p][2];
                        for (var r = !0, l = 0; l < a.length; l++)(!1 & s || o >= s) && Object.keys(n.O).every((function(e) {
                            return n.O[e](a[l])
                        })) ? a.splice(l--, 1) : (r = !1, s < o && (o = s));
                        if (r) {
                            e.splice(p--, 1);
                            var u = i();
                            void 0 !== u && (t = u)
                        }
                    }
                    return t
                }
                s = s || 0;
                for (var p = e.length; p > 0 && e[p - 1][2] > s; p--) e[p] = e[p - 1];
                e[p] = [a, i, s]
            }
        }(),
        function() {
            n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e["default"]
                } : function() {
                    return e
                };
                return n.d(t, {
                    a: t
                }), t
            }
        }(),
        function() {
            n.d = function(e, t) {
                for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
                    enumerable: !0,
                    get: t[a]
                })
            }
        }(),
        function() {
            n.f = {}, n.e = function(e) {
                return Promise.all(Object.keys(n.f).reduce((function(t, a) {
                    return n.f[a](e, t), t
                }), []))
            }
        }(),
        function() {
            n.u = function(e) {
                return "js/" + e + "." + {
                    313: "24efb259",
                    594: "4e965156",
                    595: "9a96ad50",
                    845: "cae5b7bf",
                    881: "7de9b308",
                    983: "98470dff"
                } [e] + ".js"
            }
        }(),
        function() {
            n.miniCssF = function(e) {
                return "css/" + e + "." + {
                    313: "1f2e9f3f",
                    594: "c77ec9a2",
                    595: "cdade775",
                    983: "4445fc8b"
                } [e] + ".css"
            }
        }(),
        function() {
            n.g = function() {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" === typeof window) return window
                }
            }()
        }(),
        function() {
            n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
        }(),
        function() {
            var e = {},
                t = "obs-swap:";
            n.l = function(a, i, s, o) {
                if (e[a]) e[a].push(i);
                else {
                    var r, l;
                    if (void 0 !== s)
                        for (var u = document.getElementsByTagName("script"), p = 0; p < u.length; p++) {
                            var d = u[p];
                            if (d.getAttribute("src") == a || d.getAttribute("data-webpack") == t + s) {
                                r = d;
                                break
                            }
                        }
                    r || (l = !0, r = document.createElement("script"), r.charset = "utf-8", r.timeout = 120, n.nc && r.setAttribute("nonce", n.nc), r.setAttribute("data-webpack", t + s), r.src = a), e[a] = [i];
                    var c = function(t, n) {
                            r.onerror = r.onload = null, clearTimeout(y);
                            var i = e[a];
                            if (delete e[a], r.parentNode && r.parentNode.removeChild(r), i && i.forEach((function(e) {
                                    return e(n)
                                })), t) return t(n)
                        },
                        y = setTimeout(c.bind(null, void 0, {
                            type: "timeout",
                            target: r
                        }), 12e4);
                    r.onerror = c.bind(null, r.onerror), r.onload = c.bind(null, r.onload), l && document.head.appendChild(r)
                }
            }
        }(),
        function() {
            n.r = function(e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        }(),
        function() {
            n.nmd = function(e) {
                return e.paths = [], e.children || (e.children = []), e
            }
        }(),
        function() {
            n.p = ""
        }(),
        function() {
            if ("undefined" !== typeof document) {
                var e = function(e, t, a, i, s) {
                        var o = document.createElement("link");
                        o.rel = "stylesheet", o.type = "text/css", n.nc && (o.nonce = n.nc);
                        var r = function(n) {
                            if (o.onerror = o.onload = null, "load" === n.type) i();
                            else {
                                var a = n && n.type,
                                    r = n && n.target && n.target.href || t,
                                    l = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ": " + r + ")");
                                l.name = "ChunkLoadError", l.code = "CSS_CHUNK_LOAD_FAILED", l.type = a, l.request = r, o.parentNode && o.parentNode.removeChild(o), s(l)
                            }
                        };
                        return o.onerror = o.onload = r, o.href = t, a ? a.parentNode.insertBefore(o, a.nextSibling) : document.head.appendChild(o), o
                    },
                    t = function(e, t) {
                        for (var n = document.getElementsByTagName("link"), a = 0; a < n.length; a++) {
                            var i = n[a],
                                s = i.getAttribute("data-href") || i.getAttribute("href");
                            if ("stylesheet" === i.rel && (s === e || s === t)) return i
                        }
                        var o = document.getElementsByTagName("style");
                        for (a = 0; a < o.length; a++) {
                            i = o[a], s = i.getAttribute("data-href");
                            if (s === e || s === t) return i
                        }
                    },
                    a = function(a) {
                        return new Promise((function(i, s) {
                            var o = n.miniCssF(a),
                                r = n.p + o;
                            if (t(o, r)) return i();
                            e(a, r, null, i, s)
                        }))
                    },
                    i = {
                        524: 0
                    };
                n.f.miniCss = function(e, t) {
                    var n = {
                        313: 1,
                        594: 1,
                        595: 1,
                        983: 1
                    };
                    i[e] ? t.push(i[e]) : 0 !== i[e] && n[e] && t.push(i[e] = a(e).then((function() {
                        i[e] = 0
                    }), (function(t) {
                        throw delete i[e], t
                    })))
                }
            }
        }(),
        function() {
            var e = {
                524: 0
            };
            n.f.j = function(t, a) {
                var i = n.o(e, t) ? e[t] : void 0;
                if (0 !== i)
                    if (i) a.push(i[2]);
                    else {
                        var s = new Promise((function(n, a) {
                            i = e[t] = [n, a]
                        }));
                        a.push(i[2] = s);
                        var o = n.p + n.u(t),
                            r = new Error,
                            l = function(a) {
                                if (n.o(e, t) && (i = e[t], 0 !== i && (e[t] = void 0), i)) {
                                    var s = a && ("load" === a.type ? "missing" : a.type),
                                        o = a && a.target && a.target.src;
                                    r.message = "Loading chunk " + t + " failed.\n(" + s + ": " + o + ")", r.name = "ChunkLoadError", r.type = s, r.request = o, i[1](r)
                                }
                            };
                        n.l(o, l, "chunk-" + t, t)
                    }
            }, n.O.j = function(t) {
                return 0 === e[t]
            };
            var t = function(t, a) {
                    var i, s, o = a[0],
                        r = a[1],
                        l = a[2],
                        u = 0;
                    if (o.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (i in r) n.o(r, i) && (n.m[i] = r[i]);
                        if (l) var p = l(n)
                    }
                    for (t && t(a); u < o.length; u++) s = o[u], n.o(e, s) && e[s] && e[s][0](), e[s] = 0;
                    return n.O(p)
                },
                a = self["webpackChunkobs_swap"] = self["webpackChunkobs_swap"] || [];
            a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        }();
    var a = n.O(void 0, [504], (function() {
        return n(49699)
    }));
    a = n.O(a)
})();