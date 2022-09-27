"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LP": () => (/* binding */ PlanetSpinner),
/* harmony export */   "q1": () => (/* binding */ PlanetContainer),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);



const PlanetSpinner = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spinner, {
        size: "xl",
        position: "absolute",
        left: "50%",
        top: "50%",
        ml: "calc(0px - var(--spinner-size) / 2)",
        mt: "calc(0px - var(--spinner-size))"
    })
;
const PlanetContainer = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ children  }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        ref: ref,
        className: "voxel-planet",
        m: "auto",
        mt: [
            '-20px',
            '-60px',
            '-120px'
        ],
        mb: [
            '-40px',
            '-140px',
            '-200px'
        ],
        w: [
            280,
            480,
            640
        ],
        h: [
            280,
            480,
            640
        ],
        position: "relative",
        children: children
    })
);
const Loader = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PlanetContainer, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PlanetSpinner, {
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 1368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./redux/blockchain/blockchainReducer.js
const initialState = {
    loading: false,
    account: null,
    smartContract: null,
    web3: null,
    errorMsg: ""
};
const blockchainReducer = (state = initialState, action)=>{
    switch(action.type){
        case "CONNECTION_REQUEST":
            return {
                ...initialState,
                loading: true
            };
        case "CONNECTION_SUCCESS":
            return {
                ...state,
                loading: false,
                account: action.payload.account,
                smartContract: action.payload.smartContract,
                web3: action.payload.web3
            };
        case "CONNECTION_FAILED":
            return {
                ...initialState,
                loading: false,
                errorMsg: action.payload
            };
        case "UPDATE_ACCOUNT":
            return {
                ...state,
                account: action.payload.account
            };
        default:
            return state;
    }
};
/* harmony default export */ const blockchain_blockchainReducer = (blockchainReducer);

;// CONCATENATED MODULE: ./redux/data/dataReducer.js
const dataReducer_initialState = {
    loading: false,
    totalSupply: 0,
    cost: 0,
    error: false,
    errorMsg: ""
};
const dataReducer = (state = dataReducer_initialState, action)=>{
    switch(action.type){
        case "CHECK_DATA_REQUEST":
            return {
                ...state,
                loading: true,
                error: false,
                errorMsg: ""
            };
        case "CHECK_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                totalSupply: action.payload.totalSupply,
                // cost: action.payload.cost,
                error: false,
                errorMsg: ""
            };
        case "CHECK_DATA_FAILED":
            return {
                ...dataReducer_initialState,
                loading: false,
                error: true,
                errorMsg: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const data_dataReducer = (dataReducer);

;// CONCATENATED MODULE: ./redux/store.js




const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    blockchain: blockchain_blockchainReducer,
    data: data_dataReducer
});
const middleware = [
    (external_redux_thunk_default())
];
const composeEnhancers = (0,external_redux_namespaceObject.compose)((0,external_redux_namespaceObject.applyMiddleware)(...middleware));
const configureStore = ()=>{
    return (0,external_redux_namespaceObject.createStore)(rootReducer, composeEnhancers);
};
const store = configureStore();
/* harmony default export */ const redux_store = (store);

;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/logo.js





const LogoBox = (styled_default()).span`
    font-weight:bold;
    font-size:18px;
    display: inline-flex;
    align-items:center;
    height: 30px;
    line-height: 20px;
    padding:10px;

    &:hover img {
        transform: rotate(20deg);
    }
`;
const Logo = ()=>{
    const pugLogoImg = `/logo.png`;
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LogoBox, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: pugLogoImg,
                        width: 20,
                        height: 20,
                        alt: "logo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        color: (0,react_.useColorModeValue)('gray.800', 'whiteAlpha.900'),
                        fontFamily: "M PLUS Rounded 1c",
                        fontWeight: "bold",
                        ml: 3,
                        children: "PxLabs"
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const logo = (Logo);

// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
;// CONCATENATED MODULE: ./components/theme-toggle-button.js




const ThemeToggleButton = ()=>{
    const { toggleColorMode  } = (0,react_.useColorMode)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
        exitBeforeEnter: true,
        initial: false,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.motion.div, {
            style: {
                display: 'inline-block'
            },
            initial: {
                y: -20,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1
            },
            exit: {
                y: 20,
                opacity: 0
            },
            transition: {
                duration: 0.2
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                "aria-label": "Toggle theme",
                colorScheme: (0,react_.useColorModeValue)('green', 'orange'),
                icon: (0,react_.useColorModeValue)(/*#__PURE__*/ jsx_runtime_.jsx(icons_.MoonIcon, {
                }), /*#__PURE__*/ jsx_runtime_.jsx(icons_.SunIcon, {
                })),
                onClick: toggleColorMode
            })
        }, (0,react_.useColorModeValue)('light', 'dark'))
    }));
};
/* harmony default export */ const theme_toggle_button = (ThemeToggleButton);

;// CONCATENATED MODULE: ./components/navbar.tsx






// import WalletConnectProvider from '@walletconnect/web3-provider'
// import { providers } from 'ethers'
// import { useCallback, useEffect, useReducer } from 'react'
// import WalletLink from 'walletlink'
// import Web3Modal from 'web3modal'
// import { ellipseAddress, getChainData } from '../lib/utilities'
// const INFURA_ID = '7f7bbfa41ab34bf1899cedfb64d96190'
// const providerOptions = {
//   walletconnect: {
//     package: WalletConnectProvider, // required
//     options: {
//       infuraId: INFURA_ID // required
//     }
//   },
//   'custom-walletlink': {
//     display: {
//       logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
//       name: 'Coinbase',
//       description: 'Connect to Coinbase Wallet (not Coinbase App)'
//     },
//     options: {
//       appName: 'Coinbase', // Your app name
//       networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
//       chainId: 1
//     },
//     package: WalletLink,
//     connector: async (_, options) => {
//       const { appName, networkUrl, chainId } = options
//       const walletLink = new WalletLink({
//         appName
//       })
//       const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
//       await provider.enable()
//       return provider
//     }
//   }
// }
// let web3Modal
// if (typeof window !== 'undefined') {
//   web3Modal = new Web3Modal({
//     network: 'mainnet', // optional
//     cacheProvider: true,
//     providerOptions // required
//   })
// }
// type StateType = {
//   provider?: any
//   web3Provider?: any
//   address?: string
//   chainId?: number
// }
// type ActionType =
//   | {
//       type: 'SET_WEB3_PROVIDER'
//       provider?: StateType['provider']
//       web3Provider?: StateType['web3Provider']
//       address?: StateType['address']
//       chainId?: StateType['chainId']
//     }
//   | {
//       type: 'SET_ADDRESS'
//       address?: StateType['address']
//     }
//   | {
//       type: 'SET_CHAIN_ID'
//       chainId?: StateType['chainId']
//     }
//   | {
//       type: 'RESET_WEB3_PROVIDER'
//     }
// const initialState: StateType = {
//   provider: null,
//   web3Provider: null,
//   address: null,
//   chainId: null
// }
// function reducer(state: StateType, action: ActionType): StateType {
//   switch (action.type) {
//     case 'SET_WEB3_PROVIDER':
//       return {
//         ...state,
//         provider: action.provider,
//         web3Provider: action.web3Provider,
//         address: action.address,
//         chainId: action.chainId
//       }
//     case 'SET_ADDRESS':
//       return {
//         ...state,
//         address: action.address
//       }
//     case 'SET_CHAIN_ID':
//       return {
//         ...state,
//         chainId: action.chainId
//       }
//     case 'RESET_WEB3_PROVIDER':
//       return initialState
//     default:
//       throw new Error()
//   }
// }
const LinkItem = ({ href , path , target , children , ...props })=>{
    const active = path === href;
    const inactiveColor = (0,react_.useColorModeValue)('gray200', 'whiteAlpha.900');
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
            p: 2,
            bg: active ? 'grassTeal' : undefined,
            color: active ? '#202023' : inactiveColor,
            target: target,
            ...props,
            children: children
        })
    }));
};
const Navbar = (props)=>{
    const { path  } = props;
    //   const [state, dispatch] = useReducer(reducer, initialState)
    //   const { provider, web3Provider, address, chainId } = state
    //   const connect = useCallback(async function () {
    //     // This is the initial `provider` that is returned when
    //     // using web3Modal to connect. Can be MetaMask or WalletConnect.
    //     const provider = await web3Modal.connect()
    //     // We plug the initial `provider` into ethers.js and get back
    //     // a Web3Provider. This will add on methods from ethers.js and
    //     // event listeners such as `.on()` will be different.
    //     const web3Provider = new providers.Web3Provider(provider)
    //     const signer = web3Provider.getSigner()
    //     const address = await signer.getAddress()
    //     const network = await web3Provider.getNetwork()
    //     dispatch({
    //       type: 'SET_WEB3_PROVIDER',
    //       provider,
    //       web3Provider,
    //       address,
    //       chainId: network.chainId
    //     })
    //   }, [])
    //   const disconnect = useCallback(
    //     async function () {
    //       await web3Modal.clearCachedProvider()
    //       if (provider?.disconnect && typeof provider.disconnect === 'function') {
    //         await provider.disconnect()
    //       }
    //       dispatch({
    //         type: 'RESET_WEB3_PROVIDER'
    //       })
    //     },
    //     [provider]
    //   )
    //   // Auto connect to the cached provider
    //   useEffect(() => {
    //     if (web3Modal.cachedProvider) {
    //       connect()
    //     }
    //   }, [connect])
    //   // A `provider` should come with EIP-1193 events. We'll listen for those events
    //   // here so that when a user switches accounts or networks, we can update the
    //   // local React state with that new information.
    //   useEffect(() => {
    //     if (provider?.on) {
    //       const handleAccountsChanged = (accounts: string[]) => {
    //         // eslint-disable-next-line no-console
    //         console.log('accountsChanged', accounts)
    //         dispatch({
    //           type: 'SET_ADDRESS',
    //           address: accounts[0]
    //         })
    //       }
    //       // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
    //       const handleChainChanged = (_hexChainId: string) => {
    //         window.location.reload()
    //       }
    //       const handleDisconnect = (error: { code: number; message: string }) => {
    //         // eslint-disable-next-line no-console
    //         console.log('disconnect', error)
    //         disconnect()
    //       }
    //       provider.on('accountsChanged', handleAccountsChanged)
    //       provider.on('chainChanged', handleChainChanged)
    //       provider.on('disconnect', handleDisconnect)
    //       // Subscription Cleanup
    //       return () => {
    //         if (provider.removeListener) {
    //           provider.removeListener('accountsChanged', handleAccountsChanged)
    //           provider.removeListener('chainChanged', handleChainChanged)
    //           provider.removeListener('disconnect', handleDisconnect)
    //         }
    //       }
    //     }
    //   }, [provider, disconnect])
    //   const chainData = getChainData(chainId)
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        position: "fixed",
        as: "nav",
        w: "100%",
        bg: (0,react_.useColorModeValue)('#ffffff40', '#20202380'),
        css: {
            backdropFilter: 'blur(10px)'
        },
        zIndex: 1,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
            display: "flex",
            p: 2,
            maxW: "container.xl",
            flexWrap: "wrap",
            alignItems: "center",
            justifyItems: "space-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    align: "center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        as: "h1",
                        size: "lg",
                        letterSpacing: 'tighter',
                        children: /*#__PURE__*/ jsx_runtime_.jsx(logo, {
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    direction: {
                        base: 'column',
                        md: 'row'
                    },
                    display: {
                        base: 'none',
                        md: 'flex'
                    },
                    width: {
                        base: 'full',
                        md: 'auto'
                    },
                    alignItems: "center",
                    flexGrow: 1,
                    mt: {
                        base: 4,
                        md: 0
                    },
                    ml: 170,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            target: "_blank",
                            href: "/roadmaps",
                            path: path,
                            children: "Roadmap"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            target: "_blank",
                            href: "/faqs",
                            path: path,
                            children: "FAQs"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            target: "_blank",
                            href: "/team",
                            path: path,
                            children: "Team"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            target: "_blank",
                            href: "https://platinum.pxlabs.studio/",
                            path: path,
                            children: "Platinum"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            target: "_blank",
                            href: "https://gold.pxlabs.studio/",
                            path: path,
                            children: "Gold"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            target: "_blank",
                            href: "https://silver.pxlabs.studio/",
                            path: path,
                            children: "Silver"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            target: "_blank",
                            href: "https://bronze.pxlabs.studio/",
                            path: path,
                            children: "Bronze"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    flex: 1,
                    alignItems: "right",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(theme_toggle_button, {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            ml: 2,
                            display: {
                                base: 'inline-block',
                                md: 'none'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                                isLazy: true,
                                id: "navbar-menu",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                        as: react_.IconButton,
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.HamburgerIcon, {
                                        }),
                                        variant: "outline",
                                        "aria-label": "Options"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/roadmaps",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    children: "Roadmap"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/team",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    children: "Team"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/faqs",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    children: "FAQs"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./components/footer.js


const Footer = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        align: "center",
        opacity: 0.4,
        fontSize: "sm",
        children: [
            "\xa9 ",
            new Date().getFullYear(),
            " PxLabs. All Rights Reserved."
        ]
    }));
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./components/voxel-planet-loader.js
var voxel_planet_loader = __webpack_require__(1663);
;// CONCATENATED MODULE: ./components/layouts/main.js







const LazyVoxelPlanet = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(330), __webpack_require__.e(33)]).then(__webpack_require__.bind(__webpack_require__, 8033))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(8033)
            ]
        ,
        modules: [
            "..\\components\\layouts\\main.js -> " + "../voxel-planet"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ jsx_runtime_.jsx(voxel_planet_loader/* default */.ZP, {
        })
});
const Main = ({ children , router  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        as: "main",
        pb: 8,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, inital-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "The PxLabs' Homepage"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "PxLabs"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "Bhavya"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        href: "logo.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "/favicon.ico",
                        type: "image/x-icon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "PxLabs' Homepage"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "/banner.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "PxLabs - Homepage"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {
                path: router.asPath
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
                maxW: "container.xl",
                pt: 10,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(LazyVoxelPlanet, {
                    }),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(footer, {
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const main = (Main);

;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: ./components/fonts.js


const Fonts = ()=>jsx_runtime_.jsx((style_default()), {
        id: "d3e55ab2e52a121",
        children: "@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');"
    })
;
/* harmony default export */ const fonts = (Fonts);

// EXTERNAL MODULE: ./lib/theme.js
var theme = __webpack_require__(7985);
;// CONCATENATED MODULE: ./pages/_app.js









function Website({ Component , pageProps , router  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
        store: redux_store,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
            theme: theme/* default */.Z,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(fonts, {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(main, {
                    router: router,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
                        exitBeforeEnter: true,
                        initial: true,
                        children: /*#__PURE__*/ (0,external_react_.createElement)(Component, {
                            ...pageProps,
                            key: router.route
                        })
                    })
                })
            ]
        })
    }));
}
/* harmony default export */ const _app = (Website);


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 9034:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("three");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,152,985], () => (__webpack_exec__(1368)));
module.exports = __webpack_exports__;

})();