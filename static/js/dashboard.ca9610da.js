"use strict";(self["webpackChunkvue2_antd"]=self["webpackChunkvue2_antd"]||[]).push([[966],{2045:function(e,r,o){o.r(r),o.d(r,{default:function(){return u}});var a=function(){var e=this,r=e._self._c;return r("div",[r("ChartView",{staticStyle:{height:"400px"},attrs:{options:e.chartOptions}})],1)},t=[],s=(o(4567),function(){var e=this,r=e._self._c;return r("div",{ref:"chartRef"})}),c=[],h=o(669),d=o(9242),C=o(5467),i={name:"ChartView",props:{options:{type:Object,default:()=>{}}},watch:{options(e){this.chart.setOption(e)}},data(){return{chart:null}},created(){this.resizeChart=(0,C.Z)(this.resizeChart,300)},mounted(){this.renderChart()},methods:{renderChart(){this.chart=h.S1(this.$refs.chartRef),(0,d.N)(this.$refs.chartRef,this.resizeChart),this.chart.setOption(this.options)},resizeChart(){this.chart.resize()}},beforeDestroy(){(0,d.y)(this.$refs.chartRef,this.resizeChart),this.chart.dispose(),this.chart=null}},y=i,p=o(8412),k=(0,p.Z)(y,s,c,!1,null,null,null),x=k.exports;const n=function(){return[[{fieldA:"0"},{fieldA:"1"},{fieldA:"2"}],[{fieldB:"3"},{fieldB:"4"},{fieldB:"5"}],[{fieldC:"6"},{fieldC:"7"},{fieldC:"8"}]]};var M={name:"AnalysisView",components:{ChartView:x},data(){return{chartOptions:{},interval:null}},mounted(){this.transitionData(),this.getChartData(),this.interval=setInterval((()=>{this.getChartData()}),3e3)},methods:{transitionData(){console.log("二维数组：",n());const e=n(),r=[];for(let o=0;o<e.length;o++){const a=e[o];for(let e=0;e<a.length;e++){const o=a[e],t=Object.keys(o)[0];null==r[e]&&(r[e]={}),r[e][t]=o[t]}}console.log("将二维数组的行转换成列：",r)},async getChartData(){const e=await this.generateData();this.chartOptions={title:{text:"ECharts 入门示例"},tooltip:{},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:e}]}},generateData(){return new Promise((e=>{const r=[];for(let o=0;o<6;o++){const e=Math.ceil(100*Math.random());r.push(e)}e(r)}))}},beforeDestroy(){clearInterval(this.interval)}},l=M,f=(0,p.Z)(l,a,t,!1,null,"05c693a2",null),u=f.exports},7616:function(e,r,o){o.r(r),o.d(r,{default:function(){return k}});var a=function(){var e=this,r=e._self._c;return r("div",{staticClass:"art-exhibition-container"},[r("WaterfallEasy",{ref:"waterfallRef",attrs:{width:e.waterfallWidth,maxCols:e.waterfallMaxCols,imgsArr:e.imageList},on:{scrollReachBottom:e.scrollReachBottom,click:e.imageClick},scopedSlots:e._u([{key:"default",fn:function(o){return r("div",{staticClass:"img-info"},[r("p",{staticClass:"some-info img-info-title"},[e._v("第 "+e._s(o.index+1)+" 张图片")]),r("p",{staticClass:"some-info"},[e._v(e._s(o.value.text))])])}}])})],1)},t=[],s=(o(4567),o(1379)),c=o.n(s),h=o(3019);const d=function(){return[{key:"001",text:"藏宝图宝箱",checked:!0,classify:"type",children:[{key:"001-001",text:"红木林地",checked:!0,classify:"type",isShow:!0,children:[{key:"001-001-001",text:"桥下水边",searchMapCoord:"[5220，-5107]",searchCoord:"[4983，-4957]"},{key:"001-001-002",text:"废材的野望",searchMapCoord:"[6188，-5293]",searchCoord:"[5668，-5889]"},{key:"001-001-003",text:"望海为湖",searchMapCoord:"[6366，-5297]",searchCoord:"[5853，-5492]"},{key:"001-001-004",text:"加油站",searchMapCoord:"[4845，-5264]",searchCoord:"[5466，-5192]"},{key:"001-001-005",text:"收费站",searchMapCoord:"[6369，-4703]",searchCoord:"[5416，-4069]"},{key:"001-001-006",text:"格林兄弟",searchMapCoord:"[5248，-5256]",searchCoord:"[6166，-5184]"},{key:"001-001-007",text:"凯勒庄园",searchMapCoord:"[6136，-5087]",searchCoord:"[5438，-5376]"},{key:"001-001-008",text:"撞坏的木桶",searchMapCoord:"[6117，-5417]",searchCoord:"[5065，-5448]"},{key:"001-001-009",text:"被迫迁徙",searchMapCoord:"[5775，-4976]",searchCoord:"[4645，-5122]"},{key:"001-001-010",text:"公路旁",searchMapCoord:"[6018，-5532]",searchCoord:"[5571，-4052]"},{key:"001-001-011",text:"靶场的宝藏",searchMapCoord:"[4823，-5161]",searchCoord:"[4870，-4750]",mapBefore:["-map-before","-map-before-detail"],mapBeforeInfo:"在下图信号塔上读取标签定位该藏宝图大概位置"},{key:"001-001-012",text:"不幸的万幸",searchMapCoord:"[5485，-5188]",searchCoord:"[6129，-4233]"},{key:"001-001-013",text:"临时换车",searchMapCoord:"[6280，-5385]",searchCoord:"[5254，-4212]"},{key:"001-001-014",text:"命陨湖畔",searchMapCoord:"[5709，-5739]",searchCoord:"[6379，-5034]"},{key:"001-001-015",text:"卡车雨伞",searchMapCoord:"[6276，-5085]",searchCoord:"[5203，-4252]"},{key:"001-001-016",text:"倒下的巨木",searchMapCoord:"[5295，-4205]",searchCoord:"[6328，-4283]"}]},{key:"001-002",text:"赛恩斯丘陵",checked:!1,classify:"type",isShow:!0,children:[{key:"001-002-001",text:"三棵树",searchMapCoord:"[4288，-3987]",searchCoord:"[4820，-3866]"},{key:"001-002-002",text:"对岸",searchMapCoord:"[3532，-3647]",searchCoord:"[4311，-3986]"},{key:"001-002-003",text:"鸳鸯池塘",searchMapCoord:"[4423，-3397]",searchCoord:"[4509，-3975]"},{key:"001-002-004",text:"丘陵的池塘",searchMapCoord:"[4239，-1952]",searchCoord:"[4262，-3988]"},{key:"001-002-005",text:"堵车",searchMapCoord:"[4887，-4431]",searchCoord:"[3432，-4096]",searchMapInfo:"藏宝图在红木林地"},{key:"001-002-006",text:"打车奇遇",searchMapCoord:"[4780，-4247]",searchCoord:"[4326，-3630]"},{key:"001-002-007",text:"莱顿小镇",searchMapCoord:"[4817，-4061]",searchCoord:"[4146，-4010]"},{key:"001-002-008",text:"海景小屋",searchMapCoord:"[4447，-4343]",searchCoord:"[3738，-3474]"},{key:"001-002-009",text:"车站",searchMapCoord:"[4105，-3807]",searchCoord:"[4264，-4020]"},{key:"001-002-010",text:"旅馆",searchMapCoord:"[4475，-4648]",searchCoord:"[4309，-3988]",searchMapInfo:"藏宝图在红木林地"}]},{key:"001-003",text:"中部平原",checked:!1,classify:"type",isShow:!0,children:[{key:"001-003-001",text:"通讯中心",searchMapCoord:"[5556，-3329]",searchCoord:"[7258，-2956]"},{key:"001-003-002",text:"芦苇花",searchMapCoord:"[6786，-3584]",searchCoord:"[7242，-3327]"},{key:"001-003-003",text:"工程师的呓语",searchMapCoord:"[5820，-3668]",searchCoord:"[6636，-3906]"},{key:"001-003-004",text:"堂吉诃德",searchMapCoord:"[6672，-3306]",searchCoord:"[7766，-3179]"},{key:"001-003-005",text:"无能之辈",searchMapCoord:"[6121，-361]",searchCoord:"[7593，-3066]"},{key:"001-003-006",text:"黄热气球",searchMapCoord:"[7210，-4894]",searchCoord:"[5610，-3536]"},{key:"001-003-007",text:"蔬菜大棚",searchMapCoord:"[7491，-4391]",searchCoord:"[6502，-3165]"},{key:"001-003-008",text:"破损广告",searchMapCoord:"[6653，-3005]",searchCoord:"[6449, -3043]"},{key:"001-003-009",text:"切割土地",searchMapCoord:"[5794，-3695]",searchCoord:"[7000，-3094]"},{key:"001-003-010",text:"失控的司机",searchMapCoord:"[6504，-3028]",searchCoord:"[6686，-3169]"},{key:"001-003-011",text:"医师的提醒",searchMapCoord:"[5424，-3697]",searchCoord:"[6120，-3460]"},{key:"001-003-012",text:"玛丽的羊羔",searchMapCoord:"[7451，-4180]",searchCoord:"[7251，-3928]"},{key:"001-003-013",text:"约翰受难曲",searchMapCoord:"[6161，-3617]",searchCoord:"[7679，-3713]"},{key:"001-003-014",text:"孤独的车厢",searchMapCoord:"[6268，-3384]",searchCoord:"[5868，-3222]"},{key:"001-003-015",text:"稻草人",searchMapCoord:"[7229，-3340]",searchCoord:"[6534，-3359]"}]},{key:"001-004",text:"科勒矿山",checked:!1,classify:"type",isShow:!0,children:[{key:"001-004-001",text:"开采机器",searchMapCoord:"[3757，-2544]",searchCoord:"[3309，-1254]"},{key:"001-004-002",text:"失败的漂流",searchMapCoord:"[3168，-2452]",searchCoord:"[4119，-339]"},{key:"001-004-003",text:"我的山头",searchMapCoord:"[3024，-2513]",searchCoord:"[3619, -2594]",searchMapInfo:"2023年4月20日官方已更新，获取该藏宝图现在只需要5份南瓜焖肉饼。(之前需要5份胡萝卜丝烙饼才能获取藏宝图，'胡萝卜丝烙饼配方'需要角色95级才能在渡鸦商店购买。)",searchInfo:""},{key:"001-004-004",text:"箭头的指引",searchMapCoord:"[4239，-1952]",searchCoord:"[4075，-1356]",searchMapInfo:"需要1份水果南瓜羹",searchInfo:""},{key:"001-004-005",text:"断桥下的休息",searchMapCoord:"[4083、-2563]",searchCoord:"[4362，-1467]"},{key:"001-004-006",text:"盘山赛车",searchMapCoord:"[3464，-2544]",searchCoord:"[4440，-1020]"},{key:"001-004-007",text:"废弃的门",searchMapCoord:"[4094，-2511]",searchCoord:"[2879，-1496]"},{key:"001-004-008",text:"矿山火车",searchMapCoord:"[4640，-1909]",searchCoord:"[4024，-2388]"},{key:"001-004-009",text:"水上石架",searchMapCoord:"[4397，-1327]",searchCoord:"[3480，-326]"},{key:"001-004-010",text:"村中的树",searchMapCoord:"[4309、-2492]",searchCoord:"[4504，-1721]"}]},{key:"001-005",text:"遗落之城",checked:!1,classify:"type",isShow:!0,children:[{key:"001-005-001",text:"无人喝彩",searchMapCoord:"[2489，-4080]",searchCoord:"[2067，-4090]"},{key:"001-005-002",text:"星星点灯",searchMapCoord:"[2303，-4141]",searchCoord:"[2513，-4004]"},{key:"001-005-003",text:"许愿池",searchMapCoord:"[2108，-4325]",searchCoord:"[2237，-4333]"},{key:"001-005-004",text:"水管工人",searchMapCoord:"[2501，-4420]",searchCoord:"[2575，-4586]"},{key:"001-005-005",text:"遥望大海",searchMapCoord:"[2777，-4182]",searchCoord:"[2239, -4633]",searchMapInfo:"2023年4月20日官方已更新，获取该藏宝图现在只需要一份鸡蛋肉饼。(之前需要一份日式盐烤青花鱼)",searchInfo:""}]},{key:"001-006",text:"金色沙漠",checked:!1,classify:"type",isShow:!0,children:[{key:"001-006-001",text:"尽头与起始",searchMapCoord:"[7062，-1257]",searchCoord:"[5371, -2154]"},{key:"001-006-002",text:"望月",searchMapCoord:"[7041，-625]",searchCoord:"[6036, -354]"},{key:"001-006-003",text:"岗哨",searchMapCoord:"[6016，-1788]",searchCoord:"[7614，-1580]"},{key:"001-006-004",text:"沙漠修罗场",searchMapCoord:"[6530，-516]",searchCoord:"[7315，-522]"},{key:"001-006-005",text:"露营地",searchMapCoord:"[7200，-707]",searchCoord:"[7741，-1045]"},{key:"001-006-006",text:"穹岩之下",searchMapCoord:"[7231，-1383]",searchCoord:"[6534，-1337]"},{key:"001-006-007",text:"大蘑菇",searchMapCoord:"[7475，-1605]",searchCoord:"[7681，-1167]"},{key:"001-006-008",text:"分岔路",searchMapCoord:"[6588，-882]",searchCoord:"[5586，-1018]"},{key:"001-006-009",text:"欢迎光临",searchMapCoord:"[5997，-344]",searchCoord:"[6234，-498]"},{key:"001-006-010",text:"空难",searchMapCoord:"[7171，-1592]",searchCoord:"[7050，-1518]"}]}]},{key:"002",text:"探索宝箱",checked:!1,classify:"type",children:[{key:"002-001",text:"红木林地",checked:!0,classify:"type",children:[{key:"002-001-001",text:"湖畔镇",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-001-002",text:"凯勒庄园",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-001-003",text:"瑞吉庄园",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-001-004",text:"黑莓镇",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-001-005",text:"靶场",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-001-006",text:"红木林地野外",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-001-007",text:"红木哨所",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-001-008",text:"罗斯化工厂",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-001-009",text:"摩尔加油站",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-001-010",text:"湖心岛",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-001-011",text:"加里森酿酒厂",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-001-012",text:"23号公路",searchMapCoord:"[]",searchCoord:"[]"}]},{key:"002-002",text:"赛恩斯丘陵",checked:!1,classify:"type",children:[{key:"002-002-001",text:"杰诺瓦研究所",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-002-002",text:"69号环岛公路",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-002-003",text:"埃克森化工厂",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-002-004",text:"第七变电站",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-002-005",text:"27号公路西段",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-002-006",text:"海滨废车场",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-002-007",text:"莱顿小镇",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-002-008",text:"荒山野岭",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-002-009",text:"海边小屋",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-002-010",text:"渡鸦营地探索",searchMapCoord:"[]",searchCoord:"[]"}]},{key:"002-003",text:"中部平原",checked:!1,classify:"type",children:[{key:"002-003-001",text:"中部通讯中心",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-003-002",text:"格伦火车站",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-003-003",text:"希望镇",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-003-004",text:"74号基地",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-003-005",text:"西部哨",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-003-006",text:"玫瑰小镇",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-003-007",text:"霍克斯农贸市场",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-003-008",text:"奥罗水坝",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-003-009",text:"维尔大桥",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-003-010",text:"27号公路",searchMapCoord:"[]",searchCoord:"[]"}]},{key:"002-004",text:"科勒矿山",checked:!1,classify:"type",children:[{key:"002-004-001",text:"无名小屋",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-004-002",text:"环谷挖掘场",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-004-003",text:"羚羊谷",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-004-004",text:"塞内加火车站",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-004-005",text:"69号公路旅馆",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-004-006",text:"淘金镇",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-004-007",text:"纪念碑谷",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-004-008",text:"实验室",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-004-009",text:"马蹄湾",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-004-010",text:"采石场",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-004-011",text:"野外宝箱",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-004-012",text:"科勒码头",searchMapCoord:"[]",searchCoord:"[]"}]},{key:"002-005",text:"遗落之城",checked:!1,classify:"type",children:[{key:"002-005-001",text:"西域货运中心",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-005-002",text:"英博百货",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-005-003",text:"跨海大桥",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-005-004",text:"纳尔逊广场",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-005-005",text:"第五街区",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-005-006",text:"湾区活动中心",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-005-007",text:"拾荒者聚落",searchMapCoord:"[]",searchCoord:"[]"},{key:"002-005-008",text:"杜克港口",searchMapCoord:"[]",searchCoord:"[]"}]}]},{key:"003",text:"日志收集",checked:!1,classify:"type",children:[{key:"003-001",text:"红木林地",checked:!0,classify:"type",children:[{key:"003-001-001",text:"贾米尔日记",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-001-002",text:"贾米尔日记2",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-001-003",text:"贾米尔日记3",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-001-004",text:"贾米尔日记4",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-001-005",text:"金森泽日记",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-001-006",text:"金森泽日记2",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-001-007",text:"金森泽日记3",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-001-008",text:"金森泽日记4",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-001-009",text:"利浦尔日记",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-001-010",text:"利浦尔日记2",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-001-011",text:"利浦尔日记3",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-001-012",text:"丽塔日记",searchMapCoord:"[]",searchCoord:"[]"}]},{key:"003-002",text:"赛恩斯丘陵",checked:!1,classify:"type",children:[{key:"003-002-001",text:"乔治日记",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-002-002",text:"乔治日记2",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-002-003",text:"破旧的日记",searchMapCoord:"[]",searchCoord:"[]"}]},{key:"003-003",text:"中部平原",checked:!1,classify:"type",children:[{key:"003-003-001",text:"辛普森日记",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-003-002",text:"辛普森日记2",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-003-003",text:"辛普森日记3",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-003-004",text:"辛普森日记4",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-003-005",text:"辛普森日记5",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-003-006",text:"藤井悠日记",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-003-007",text:"藤井悠日记2",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-003-008",text:"藤井悠日记3",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-003-009",text:"探索队日记",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-003-010",text:"米歇尔日记",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-003-011",text:"米歇尔日记2",searchMapCoord:"[]",searchCoord:"[]"}]},{key:"003-004",text:"科勒矿山",checked:!1,classify:"type",children:[{key:"003-004-001",text:"安德鲁日记",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-004-002",text:"安德鲁日记2",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-004-003",text:"安德鲁日记3",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-004-004",text:"安德鲁日记4",searchMapCoord:"[]",searchCoord:"[]"},{key:"003-004-005",text:"安德鲁日记5",searchMapCoord:"[]",searchCoord:"[]"}]},{key:"003-005",text:"遗落之城",checked:!1,classify:"type",children:[{key:"003-005-001",text:"苏雪日记",searchMapCoord:"[]",searchCoord:"[]"}]}]}]};var C={name:"ArtExhibition",components:{WaterfallEasy:c()},data(){return{imageList:[],windowWidth:0,waterfallWidth:0,waterfallMaxCols:5}},computed:{navLayout(){return this.$route.query.navLayout||"left"}},watch:{windowWidth(e){this.waterfallWidth="left"===this.navLayout?e-256:e},navLayout(e){this.waterfallWidth="left"===e?this.waterfallWidth-256:this.waterfallWidth+256}},created(){this.initData()},mounted(){this.windowWidth=window.innerWidth||document.body.clientWidth||document.documentElement.clientWidth,window.addEventListener("resize",(0,h.Z)(this.onWindowResize.bind(this),300))},methods:{initData(){const e=[];d().forEach((r=>{r.children.forEach((r=>{r.children.forEach((r=>{const{key:o,text:a}=r;if("001"===o.split("-")[0]){const r={text:`${a}-藏宝图-地图位置`,src:`static/img/kun-kun/${o}-map.jpg`},t={text:`${a}-宝箱-地图位置`,src:`static/img/kun-kun/${o}.jpg`};e.push(r,t)}}))}))})),this.imageList=e},scrollReachBottom(){this.$refs.waterfallRef.waterfallOver()},imageClick(e,{value:r}){e.preventDefault(),"img"===e.target.tagName.toLowerCase()&&this.$viewerApi({images:[r.src]})},onWindowResize(e){this.windowWidth=e.currentTarget.innerWidth}},beforeDestroy(){window.removeEventListener("resize",this.onWindowResize)}},i=C,y=o(8412),p=(0,y.Z)(i,a,t,!1,null,"4ed96a8d",null),k=p.exports}}]);