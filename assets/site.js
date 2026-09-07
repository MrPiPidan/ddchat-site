"use strict";

const translations = {
  "zh-Hans": {
    "skipLink": "跳到主要内容",
    "navLabel": "主导航",
    "navDesign": "设计",
    "navAPI": "接入",
    "navAssistants": "助手",
    "navPrivacy": "隐私",
    "languageLabel": "语言",
    "navDownload": "下载",
    "platform": "为 iPhone 和 iPad 打造",
    "heroLine1": "精致简约的",
    "heroLine2": "原生 AI 客户端",
    "heroBody": "接入自己的 API，使用你喜欢的模型和助手。\n熟悉的 iOS 设计，简单、细致的对话体验。",
    "storeDownload": "在 App Store 下载",
    "heroNote": "需自备 API 密钥",
    "heroVisualLabel": "DDchat 实际应用界面",
    "openHome": "查看助手首页",
    "screenHomeAlt": "DDchat 助手首页",
    "openHtml": "查看对话界面",
    "screenHtmlAlt": "DDchat HTML 内容展示",
    "openSearch": "查看联网搜索",
    "screenSearchAlt": "DDchat 联网搜索与来源引用界面",
    "designTitle": "精致设计\n原生体验",
    "designBody": "圆润的对话气泡、通透的玻璃质感，配合细腻的流式动画与触感反馈。常用操作放在顺手的位置，界面保持简洁。",
    "composerTitle": "常用选项\n就在输入框旁",
    "composerBody": "选择模型、调整思考档位、开启联网，集中在同一处。无需离开当前对话。",
    "viewScreen": "查看完整界面",
    "composerAlt": "DDchat 输入栏与模型选择入口",
    "detailControlLabel": "查看交互细节",
    "detailComposer": "输入与选择",
    "detailReading": "思考与回复",
    "detailAssistants": "助手首页",
    "detailCaption": "DDchat 实际界面局部",
    "designNative": "iOS 原生界面与系统菜单",
    "designThinking": "思考内容实时预览、展开阅读",
    "designContinue": "切换助手继续生成，完成后提醒未读",
    "screenProviderAlt": "DDchat 自定义 API 服务商设置",
    "openProvider": "查看 API 设置界面",
    "connectionsTitle": "自定义 API\n自动识别模型",
    "connectionsBody": "填入 API 地址和密钥，自动获取模型列表。DDchat 会识别模型的思考、图片理解和工具能力，匹配对应的选项。",
    "connectionsExtra": "支持官方 API、兼容接口和第三方中转站。需要时，也可以手动添加模型、调整能力设置。",
    "providersLabel": "支持的模型服务",
    "customAPI": "自定义 API",
    "connectionNote": "支持 Chat Completions、Responses 和 Anthropic 协议。具体能力以所选模型与服务商为准。",
    "htmlTitle": "HTML 标签\n直接呈现在对话里",
    "htmlBody": "回复中的 HTML 标签可以直接渲染为折叠面板、表格、列表和卡片，与正文一起显示在消息中。",
    "htmlExtra": "也支持 Markdown 排版、代码高亮与复制。",
    "htmlRealScreen": "查看 App 中的实际效果",
    "demoLabel": "HTML 标签渲染示例",
    "demoControlLabel": "示例视图",
    "demoRendered": "渲染效果",
    "demoSource": "HTML 标签",
    "demoQuestion": "把周六的行程整理一下。",
    "demoIntro": "上午看展，下午逛书店。时间安排在这里：",
    "demoSummary": "周六的安排",
    "demoMorning": "去美术馆看展",
    "demoNoon": "在附近吃午饭",
    "demoAfternoon": "逛书店，喝杯咖啡",
    "demoOutro": "出门前记得确认展览的开放时间。",
    "demoHint": "点按“周六的安排”，展开或收起内容。",
    "copyCode": "复制代码",
    "assistantsTitle": "多个助手\n各有自己的设定",
    "assistantsBody": "写作、编程，或是一个有自己性格的角色。每个助手分别保存提示词、默认模型、参数和对话记录。",
    "systemPromptTitle": "系统提示词",
    "systemPromptBody": "设定助手的角色、语气和回复要求。长提示词也有专门的编辑空间。",
    "affixTitle": "前置词与后置词",
    "affixBody": "发送消息时自动带上常用要求，支持多条排序和单独开关。",
    "assistantShare": "调好的提示词和参数，还可以打包分享。",
    "screenAssistantAlt": "DDchat 系统提示词与前后置词设置",
    "openAssistant": "查看助手设置",
    "privacyTitle": "隐私至上",
    "privacyBody": "对话记录与助手配置，保存在你的设备上。\n消息直接发送给你选择的服务商，不经过 DDchat 服务器。",
    "noAccount": "无需注册账号",
    "noAds": "无广告",
    "noTracking": "无追踪",
    "privacyLink": "阅读隐私政策",
    "privacyNote": "使用模型或联网功能时，相关内容由对应服务商处理，适用其隐私政策。",
    "supportTitle": "常见问题",
    "supportBody": "问题反馈与功能建议",
    "faqKeyQuestion": "下载后就能直接聊天吗？",
    "faqKeyAnswer": "需要先添加服务商的 API 地址和密钥，再选择模型。DDchat 不包含 AI 服务，模型使用费用由你选择的服务商收取。",
    "faqProviderQuestion": "可以接入哪些服务？",
    "faqProviderAnswer": "支持 Chat Completions、Responses 和 Anthropic 三种协议，可连接相应的官方 API、兼容服务和中转站，也支持自定义请求头。模型列表可以自动获取或手动添加。",
    "faqDeviceQuestion": "支持哪些设备？",
    "faqDeviceAnswer": "支持 iPhone 和 iPad，需要 iOS 16.0 或 iPadOS 16.0 及以上版本。应用内提供简体中文、繁體中文、English、日本語和 한국어。",
    "faqCapabilityQuestion": "支持联网搜索和图片理解吗？",
    "faqCapabilityAnswer": "支持。可以发送多张图片，也可以让模型搜索、读取网页并在回答中标注来源。具体能力取决于所选模型和服务商，联网搜索也可单独配置搜索服务。",
    "downloadTitle": "在 iPhone 和 iPad 上\n使用 DDchat",
    "downloadBody": "iOS 16.0 及以上版本，需自备 API 密钥。",
    "footerPrivacy": "隐私政策",
    "contact": "联系我们",
    "actualScreen": "DDchat 实际应用界面",
    "close": "关闭",
    "readingTitle": "思考与回答，清楚分开",
    "readingBody": "生成时实时预览思考内容，想看细节再展开。正文、代码与折叠内容各有清楚的排版。",
    "readingAlt": "DDchat 思考内容与回复排版",
    "libraryTitle": "常用助手，一眼就能找到",
    "libraryBody": "用卡片整理助手，可长按拖动排序。回来时恢复上次对话，有新回复就从新消息开头读起。",
    "copied": "已复制",
    "copyFailed": "请选取代码复制",
    "title": "DDchat — 精致简约的 iOS 原生 AI 客户端",
    "description": "DDchat，精致简约的 iOS 原生 AI 客户端。自定义 API、自动识别模型，在对话中渲染 HTML 标签，为不同用途配置助手。对话保存在本地。",
    "locale": "zh_CN"
  },
  "zh-Hant": {
    "skipLink": "跳到主要內容",
    "navLabel": "主導覽",
    "navDesign": "設計",
    "navAPI": "連接",
    "navAssistants": "助手",
    "navPrivacy": "隱私",
    "languageLabel": "語言",
    "navDownload": "下載",
    "platform": "為 iPhone 和 iPad 打造",
    "heroLine1": "精緻簡約的",
    "heroLine2": "原生 AI 用戶端",
    "heroBody": "連接自己的 API，使用你喜歡的模型與助手。\n熟悉的 iOS 設計，簡單、細緻的對話體驗。",
    "storeDownload": "在 App Store 下載",
    "heroNote": "需自備 API 金鑰",
    "heroVisualLabel": "DDchat 實際應用程式畫面",
    "openHome": "查看助手首頁",
    "screenHomeAlt": "DDchat 助手首頁",
    "openHtml": "查看對話畫面",
    "screenHtmlAlt": "DDchat HTML 內容展示",
    "openSearch": "查看聯網搜尋",
    "screenSearchAlt": "DDchat 聯網搜尋與來源引用畫面",
    "designTitle": "精緻設計\n原生體驗",
    "designBody": "圓潤的對話氣泡、通透的玻璃質感，搭配細膩的串流動畫與觸覺回饋。常用操作放在順手的位置，介面保持簡潔。",
    "composerTitle": "常用選項\n就在輸入框旁",
    "composerBody": "選擇模型、調整思考程度、開啟聯網，集中在同一處。無需離開目前的對話。",
    "viewScreen": "查看完整畫面",
    "composerAlt": "DDchat 輸入欄與模型選擇入口",
    "detailControlLabel": "查看互動細節",
    "detailComposer": "輸入與選擇",
    "detailReading": "思考與回覆",
    "detailAssistants": "助手首頁",
    "detailCaption": "DDchat 實際畫面局部",
    "designNative": "iOS 原生介面與系統選單",
    "designThinking": "思考內容即時預覽、展開閱讀",
    "designContinue": "切換助手繼續生成，完成後提醒未讀",
    "screenProviderAlt": "DDchat 自訂 API 服務商設定",
    "openProvider": "查看 API 設定畫面",
    "connectionsTitle": "自訂 API\n自動識別模型",
    "connectionsBody": "填入 API 位址與金鑰，自動取得模型清單。DDchat 會識別模型的思考、圖片理解和工具能力，匹配對應選項。",
    "connectionsExtra": "支援官方 API、相容介面與第三方中轉站。需要時，也可手動新增模型、調整能力設定。",
    "providersLabel": "支援的模型服務",
    "customAPI": "自訂 API",
    "connectionNote": "支援 Chat Completions、Responses 與 Anthropic 協定。具體能力以所選模型與服務商為準。",
    "htmlTitle": "HTML 標籤\n直接呈現在對話裡",
    "htmlBody": "回覆中的 HTML 標籤可直接渲染為折疊面板、表格、清單與卡片，與正文一起顯示在訊息中。",
    "htmlExtra": "也支援 Markdown 排版、程式碼高亮與複製。",
    "htmlRealScreen": "查看 App 中的實際效果",
    "demoLabel": "HTML 標籤渲染示例",
    "demoControlLabel": "示例檢視",
    "demoRendered": "渲染效果",
    "demoSource": "HTML 標籤",
    "demoQuestion": "把週六的行程整理一下。",
    "demoIntro": "上午看展，下午逛書店。時間安排在這裡：",
    "demoSummary": "週六的安排",
    "demoMorning": "去美術館看展",
    "demoNoon": "在附近吃午飯",
    "demoAfternoon": "逛書店，喝杯咖啡",
    "demoOutro": "出門前記得確認展覽的開放時間。",
    "demoHint": "點按「週六的安排」，展開或收起內容。",
    "copyCode": "複製程式碼",
    "assistantsTitle": "多個助手\n各有自己的設定",
    "assistantsBody": "寫作、程式設計，或是一個有自己性格的角色。每個助手分別儲存提示詞、預設模型、參數與對話記錄。",
    "systemPromptTitle": "系統提示詞",
    "systemPromptBody": "設定助手的角色、語氣與回覆要求。長提示詞也有專門的編輯空間。",
    "affixTitle": "前置詞與後置詞",
    "affixBody": "傳送訊息時自動帶上常用要求，支援多條排序與單獨開關。",
    "assistantShare": "調好的提示詞與參數，還可以打包分享。",
    "screenAssistantAlt": "DDchat 系統提示詞與前後置詞設定",
    "openAssistant": "查看助手設定",
    "privacyTitle": "隱私至上",
    "privacyBody": "對話記錄與助手設定，儲存在你的裝置上。\n訊息直接傳送給你選擇的服務商，不經過 DDchat 伺服器。",
    "noAccount": "無需註冊帳號",
    "noAds": "無廣告",
    "noTracking": "無追蹤",
    "privacyLink": "閱讀隱私政策",
    "privacyNote": "使用模型或聯網功能時，相關內容由對應服務商處理，適用其隱私政策。",
    "supportTitle": "常見問題",
    "supportBody": "問題回報與功能建議",
    "faqKeyQuestion": "下載後就能直接聊天嗎？",
    "faqKeyAnswer": "需要先加入服務商的 API 位址與金鑰，再選擇模型。DDchat 不包含 AI 服務，模型使用費用由你選擇的服務商收取。",
    "faqProviderQuestion": "可以連接哪些服務？",
    "faqProviderAnswer": "支援 Chat Completions、Responses 和 Anthropic 三種協定，可連接相應的官方 API、相容服務和中轉站，也支援自訂請求標頭。模型清單可以自動取得或手動新增。",
    "faqDeviceQuestion": "支援哪些裝置？",
    "faqDeviceAnswer": "支援 iPhone 和 iPad，需要 iOS 16.0 或 iPadOS 16.0 及以上版本。應用程式內提供簡體中文、繁體中文、English、日本語和 한국어。",
    "faqCapabilityQuestion": "支援聯網搜尋與圖片理解嗎？",
    "faqCapabilityAnswer": "支援。可傳送多張圖片，也可讓模型搜尋、讀取網頁並在回答中標註來源。具體能力取決於所選模型與服務商，聯網搜尋也可單獨設定搜尋服務。",
    "downloadTitle": "在 iPhone 和 iPad 上\n使用 DDchat",
    "downloadBody": "iOS 16.0 及以上版本，需自備 API 金鑰。",
    "footerPrivacy": "隱私政策",
    "contact": "聯絡我們",
    "actualScreen": "DDchat 實際應用程式畫面",
    "close": "關閉",
    "readingTitle": "思考與回答，清楚分開",
    "readingBody": "生成時即時預覽思考內容，想看細節再展開。正文、程式碼與折疊內容各有清楚的排版。",
    "readingAlt": "DDchat 思考內容與回覆排版",
    "libraryTitle": "常用助手，一眼就能找到",
    "libraryBody": "以卡片整理助手，可長按拖曳排序。回來時恢復上次對話，有新回覆就從新訊息開頭讀起。",
    "copied": "已複製",
    "copyFailed": "請選取程式碼複製",
    "title": "DDchat — 精緻簡約的 iOS 原生 AI 用戶端",
    "description": "原生設計，簡單易用。自訂 API、自動識別模型、對話內 HTML 標籤渲染與多助手設定。",
    "locale": "zh_TW"
  },
  "en": {
    "skipLink": "Skip to content",
    "navLabel": "Main navigation",
    "navDesign": "Design",
    "navAPI": "Connections",
    "navAssistants": "Assistants",
    "navPrivacy": "Privacy",
    "languageLabel": "Language",
    "navDownload": "Get the app",
    "platform": "Made for iPhone and iPad",
    "heroLine1": "Thoughtfully designed",
    "heroLine2": "A native AI client",
    "heroBody": "Your own APIs, your preferred models and assistants.\nFamiliar iOS design, with care in the details.",
    "storeDownload": "Download on the App Store",
    "heroNote": "Requires your own API key",
    "heroVisualLabel": "Actual DDchat app screens",
    "openHome": "View the assistant library",
    "screenHomeAlt": "DDchat assistant library",
    "openHtml": "View the conversation screen",
    "screenHtmlAlt": "HTML content in a DDchat conversation",
    "openSearch": "View web search",
    "screenSearchAlt": "DDchat web search with source citations",
    "designTitle": "Native design\nCare in every detail",
    "designBody": "Rounded message bubbles, translucent surfaces, smooth streaming, and subtle haptics. Frequent actions stay within reach, in an uncluttered interface.",
    "composerTitle": "Your controls, beside your message",
    "composerBody": "Choose a model, adjust reasoning, or turn on search in one place, without leaving your conversation.",
    "viewScreen": "View the full screen",
    "composerAlt": "DDchat message input and model controls",
    "detailControlLabel": "Explore interface details",
    "detailComposer": "Message controls",
    "detailReading": "Reasoning and replies",
    "detailAssistants": "Assistant library",
    "detailCaption": "Details from the actual DDchat app",
    "designNative": "Native iOS interface and system menus",
    "designThinking": "Live reasoning previews, expandable for detail",
    "designContinue": "Keep generating across assistants, with unread indicators",
    "screenProviderAlt": "Custom API provider settings in DDchat",
    "openProvider": "View API settings",
    "connectionsTitle": "Connect your API\nAuto-detect your models",
    "connectionsBody": "Enter an API endpoint and key to fetch your models. DDchat identifies reasoning, vision, and tool capabilities and shows the relevant controls.",
    "connectionsExtra": "Use official APIs, compatible endpoints, or third-party gateways. Add models and adjust their capabilities manually when needed.",
    "providersLabel": "Supported model services",
    "customAPI": "Custom APIs",
    "connectionNote": "Supports Chat Completions, Responses, and Anthropic protocols. Available capabilities depend on the model and provider.",
    "htmlTitle": "HTML tags, rendered\ninside your conversation",
    "htmlBody": "HTML tags in a reply become collapsible sections, tables, lists, and cards, displayed alongside the text in the same message.",
    "htmlExtra": "Markdown formatting, syntax highlighting, and code copying are supported too.",
    "htmlRealScreen": "See it in the app",
    "demoLabel": "HTML rendering example",
    "demoControlLabel": "Example view",
    "demoRendered": "Rendered",
    "demoSource": "HTML tags",
    "demoQuestion": "Organize my plans for Saturday.",
    "demoIntro": "An exhibition in the morning, a bookshop in the afternoon. Here is the schedule:",
    "demoSummary": "Saturday’s plans",
    "demoMorning": "Visit the art exhibition",
    "demoNoon": "Have lunch nearby",
    "demoAfternoon": "Browse books over coffee",
    "demoOutro": "Check the exhibition’s opening hours before you leave.",
    "demoHint": "Tap “Saturday’s plans” to expand or collapse it.",
    "copyCode": "Copy code",
    "assistantsTitle": "Multiple assistants\nIndividual settings",
    "assistantsBody": "For writing, coding, or a character with a personality of its own. Each assistant keeps its own prompts, default model, parameters, and conversations.",
    "systemPromptTitle": "System prompts",
    "systemPromptBody": "Define a role, tone, and instructions, with a spacious editor for longer prompts.",
    "affixTitle": "Prefixes and suffixes",
    "affixBody": "Add recurring instructions before or after each message. Reorder them and toggle each one individually.",
    "assistantShare": "Share the prompts and parameters you have set up.",
    "screenAssistantAlt": "System prompt, prefix, and suffix settings in DDchat",
    "openAssistant": "View assistant settings",
    "privacyTitle": "Privacy first",
    "privacyBody": "Conversations and assistant settings stay on your device.\nMessages go directly to your chosen provider, without passing through DDchat servers.",
    "noAccount": "No account required",
    "noAds": "No ads",
    "noTracking": "No tracking",
    "privacyLink": "Read the privacy policy",
    "privacyNote": "When you use models or web features, the relevant providers process the content under their own privacy policies.",
    "supportTitle": "Frequently asked questions",
    "supportBody": "Support and feature requests",
    "faqKeyQuestion": "Can I start chatting as soon as I download?",
    "faqKeyAnswer": "Add your provider’s API endpoint and key, then choose a model. DDchat does not include an AI service; model usage is billed by your chosen provider.",
    "faqProviderQuestion": "Which services can I connect?",
    "faqProviderAnswer": "DDchat supports Chat Completions, Responses, and Anthropic protocols. Connect a matching official API, compatible service, or gateway, with custom request headers if needed. Fetch your model list automatically or add models manually.",
    "faqDeviceQuestion": "Which devices are supported?",
    "faqDeviceAnswer": "iPhone and iPad running iOS 16.0 or iPadOS 16.0 or later. The app is available in Simplified Chinese, Traditional Chinese, English, Japanese, and Korean.",
    "faqCapabilityQuestion": "Does it support web search and images?",
    "faqCapabilityAnswer": "Yes. Send multiple images, or let models search and read web pages with source citations. Availability depends on your model and provider. You can also configure a separate search service.",
    "downloadTitle": "DDchat\non your iPhone and iPad",
    "downloadBody": "Requires iOS 16.0 or later and your own API key.",
    "footerPrivacy": "Privacy policy",
    "contact": "Contact",
    "actualScreen": "Actual DDchat app screen",
    "close": "Close",
    "readingTitle": "Reasoning, with room for the answer",
    "readingBody": "Preview reasoning as it arrives and expand it for more detail. Text, code, and collapsible content each have their own clear layout.",
    "readingAlt": "DDchat reasoning and reply layout",
    "libraryTitle": "Your assistants, easy to find",
    "libraryBody": "Arrange assistant cards by dragging. Return to your last conversation, or start at the beginning of a new unread reply.",
    "copied": "Copied",
    "copyFailed": "Select the code to copy it",
    "title": "DDchat — A thoughtfully designed, native AI client for iOS",
    "description": "A native AI client for iPhone and iPad. Connect your APIs, recognize model capabilities, render HTML in conversations, and configure your own assistants.",
    "locale": "en_US"
  },
  "ja": {
    "skipLink": "本文へスキップ",
    "navLabel": "メインナビゲーション",
    "navDesign": "デザイン",
    "navAPI": "API 接続",
    "navAssistants": "アシスタント",
    "navPrivacy": "プライバシー",
    "languageLabel": "言語",
    "navDownload": "ダウンロード",
    "platform": "iPhone と iPad のために",
    "heroLine1": "美しく、シンプルな",
    "heroLine2": "ネイティブの\nAI クライアント",
    "heroBody": "自分の API で、好きなモデルやアシスタントを。\n使い慣れた iOS のデザインで、心地よく会話できます。",
    "storeDownload": "App Store からダウンロード",
    "heroNote": "ご自身の API キーが必要です",
    "heroVisualLabel": "DDchat の実際のアプリ画面",
    "openHome": "アシスタント一覧を見る",
    "screenHomeAlt": "DDchat のアシスタント一覧",
    "openHtml": "会話画面を見る",
    "screenHtmlAlt": "DDchat の HTML コンテンツ表示",
    "openSearch": "ウェブ検索を見る",
    "screenSearchAlt": "DDchat のウェブ検索と引用元",
    "designTitle": "洗練されたデザイン\n自然な操作感",
    "designBody": "丸みのある吹き出し、透け感のあるガラス表現、滑らかなストリーミング表示と触覚フィードバック。よく使う操作をまとめ、画面はシンプルに。",
    "composerTitle": "よく使う設定は、入力欄のそばに",
    "composerBody": "モデルの選択、思考レベルの調整、ウェブ検索の切り替えを一か所に。会話から離れる必要はありません。",
    "viewScreen": "画面全体を見る",
    "composerAlt": "DDchat の入力欄とモデル選択",
    "detailControlLabel": "操作の詳細を見る",
    "detailComposer": "入力と設定",
    "detailReading": "思考と回答",
    "detailAssistants": "アシスタント一覧",
    "detailCaption": "DDchat の実際の画面の一部",
    "designNative": "iOS ネイティブの画面とシステムメニュー",
    "designThinking": "思考内容をリアルタイムで確認、展開して読む",
    "designContinue": "アシスタントを切り替えても生成を継続、未読を表示",
    "screenProviderAlt": "DDchat のカスタム API サービス設定",
    "openProvider": "API 設定画面を見る",
    "connectionsTitle": "自分の API を接続\nモデルを自動認識",
    "connectionsBody": "API の URL とキーを入力してモデル一覧を取得。思考、画像理解、ツールなどの対応機能を認識し、適切な設定項目を表示します。",
    "connectionsExtra": "公式 API、互換 API、サードパーティのゲートウェイに対応。モデルの手動追加や機能設定の調整もできます。",
    "providersLabel": "対応するモデルサービス",
    "customAPI": "カスタム API",
    "connectionNote": "Chat Completions、Responses、Anthropic の各プロトコルに対応。利用できる機能はモデルとサービスによって異なります。",
    "htmlTitle": "HTML タグを\n会話の中にそのまま表示",
    "htmlBody": "回答内の HTML タグを、折りたたみパネル、表、リスト、カードとして描画。本文と同じメッセージ内に表示します。",
    "htmlExtra": "Markdown 表示、コードのシンタックスハイライトとコピーにも対応しています。",
    "htmlRealScreen": "アプリでの表示を見る",
    "demoLabel": "HTML タグの表示例",
    "demoControlLabel": "表示の切り替え",
    "demoRendered": "表示結果",
    "demoSource": "HTML タグ",
    "demoQuestion": "土曜日の予定をまとめて。",
    "demoIntro": "午前は展覧会、午後は書店へ。予定はこちらです。",
    "demoSummary": "土曜日の予定",
    "demoMorning": "美術館で展覧会を見る",
    "demoNoon": "近くでランチ",
    "demoAfternoon": "書店に寄って、コーヒーを一杯",
    "demoOutro": "出かける前に、展覧会の開館時間を確認しましょう。",
    "demoHint": "「土曜日の予定」をタップして開閉できます。",
    "copyCode": "コードをコピー",
    "assistantsTitle": "アシスタントごとに\n自分だけの設定を",
    "assistantsBody": "文章作成、プログラミング、個性のあるキャラクターにも。プロンプト、既定のモデル、パラメータ、会話履歴を個別に保存します。",
    "systemPromptTitle": "システムプロンプト",
    "systemPromptBody": "役割、口調、回答の条件を設定。長いプロンプトも専用のエディタで編集できます。",
    "affixTitle": "前置文と後置文",
    "affixBody": "よく使う指示を送信時に自動で追加。複数の文を並べ替え、個別にオン・オフできます。",
    "assistantShare": "設定したプロンプトやパラメータは、まとめて共有できます。",
    "screenAssistantAlt": "DDchat のシステムプロンプトと前置・後置文の設定",
    "openAssistant": "アシスタント設定を見る",
    "privacyTitle": "プライバシーを最優先に",
    "privacyBody": "会話履歴とアシスタント設定は、あなたの端末に保存。\nメッセージは DDchat のサーバーを経由せず、選んだサービスに直接送信されます。",
    "noAccount": "アカウント登録不要",
    "noAds": "広告なし",
    "noTracking": "追跡なし",
    "privacyLink": "プライバシーポリシーを読む",
    "privacyNote": "モデルやウェブ機能の利用時は、各サービスのプライバシーポリシーに基づいて内容が処理されます。",
    "supportTitle": "よくある質問",
    "supportBody": "お問い合わせ・機能のご要望",
    "faqKeyQuestion": "ダウンロードしたらすぐに話せますか？",
    "faqKeyAnswer": "サービスの API URL とキーを追加し、モデルを選択してください。DDchat に AI サービスは含まれず、利用料金は選択したサービスから請求されます。",
    "faqProviderQuestion": "どのサービスに接続できますか？",
    "faqProviderAnswer": "Chat Completions、Responses、Anthropic の3つのプロトコルに対応しています。対応する公式 API、互換サービス、ゲートウェイに接続でき、カスタムヘッダーも設定可能です。モデル一覧の自動取得と手動追加に対応しています。",
    "faqDeviceQuestion": "対応端末を教えてください。",
    "faqDeviceAnswer": "iOS 16.0 または iPadOS 16.0 以降の iPhone と iPad に対応しています。アプリの言語は、簡体字中国語、繁体字中国語、英語、日本語、韓国語から選べます。",
    "faqCapabilityQuestion": "ウェブ検索や画像理解に対応していますか？",
    "faqCapabilityAnswer": "はい。複数の画像を送ったり、ウェブページを検索・閲覧して出典付きの回答を得たりできます。対応状況はモデルとサービスによって異なり、検索サービスを別途設定することもできます。",
    "downloadTitle": "iPhone と iPad で\nDDchat を",
    "downloadBody": "iOS 16.0 以降に対応。ご自身の API キーが必要です。",
    "footerPrivacy": "プライバシーポリシー",
    "contact": "お問い合わせ",
    "actualScreen": "DDchat の実際のアプリ画面",
    "close": "閉じる",
    "readingTitle": "思考と回答を、読みやすく",
    "readingBody": "生成中の思考内容をプレビューし、詳しく読みたいときに展開。本文、コード、折りたたみ部分を読みやすく表示します。",
    "readingAlt": "DDchat の思考内容と回答表示",
    "libraryTitle": "いつものアシスタントが、すぐそこに",
    "libraryBody": "カードをドラッグして並べ替え。前回の会話を再開でき、新しい返信があればその冒頭から読めます。",
    "copied": "コピーしました",
    "copyFailed": "コードを選択してコピーしてください",
    "title": "DDchat — 美しくシンプルな iOS ネイティブ AI クライアント",
    "description": "iPhone・iPad 向けのネイティブ AI クライアント。自分の API、モデルの自動認識、会話内の HTML 表示、アシスタントの個別設定。",
    "locale": "ja_JP"
  },
  "ko": {
    "skipLink": "본문으로 건너뛰기",
    "navLabel": "주 메뉴",
    "navDesign": "디자인",
    "navAPI": "API 연결",
    "navAssistants": "도우미",
    "navPrivacy": "개인정보",
    "languageLabel": "언어",
    "navDownload": "다운로드",
    "platform": "iPhone과 iPad를 위해",
    "heroLine1": "아름답고 간결한",
    "heroLine2": "네이티브 AI 클라이언트",
    "heroBody": "내 API로 원하는 모델과 도우미를 사용하세요.\n익숙한 iOS 디자인에 세심한 대화 경험을 담았습니다.",
    "storeDownload": "App Store에서 다운로드",
    "heroNote": "개인 API 키가 필요합니다",
    "heroVisualLabel": "실제 DDchat 앱 화면",
    "openHome": "도우미 목록 보기",
    "screenHomeAlt": "DDchat 도우미 목록",
    "openHtml": "대화 화면 보기",
    "screenHtmlAlt": "DDchat HTML 콘텐츠 표시",
    "openSearch": "웹 검색 보기",
    "screenSearchAlt": "DDchat 웹 검색과 출처 인용",
    "designTitle": "세심한 디자인\n익숙한 네이티브 경험",
    "designBody": "둥근 말풍선과 투명한 유리 질감, 부드러운 스트리밍과 섬세한 햅틱 피드백. 자주 쓰는 기능을 가까이 두고 화면은 간결하게 유지합니다.",
    "composerTitle": "자주 쓰는 설정을 입력창 옆에",
    "composerBody": "모델 선택, 사고 수준 조절, 웹 검색 설정을 한곳에서. 대화 화면을 나갈 필요가 없습니다.",
    "viewScreen": "전체 화면 보기",
    "composerAlt": "DDchat 입력창과 모델 선택",
    "detailControlLabel": "인터페이스 자세히 보기",
    "detailComposer": "입력과 선택",
    "detailReading": "사고와 답변",
    "detailAssistants": "도우미 목록",
    "detailCaption": "실제 DDchat 화면의 일부",
    "designNative": "iOS 네이티브 인터페이스와 시스템 메뉴",
    "designThinking": "사고 내용을 실시간으로 보고 펼쳐 읽기",
    "designContinue": "도우미 전환 중에도 생성 유지, 완료 후 읽지 않음 표시",
    "screenProviderAlt": "DDchat 사용자 지정 API 서비스 설정",
    "openProvider": "API 설정 화면 보기",
    "connectionsTitle": "내 API를 연결하면\n모델을 자동으로 인식",
    "connectionsBody": "API 주소와 키를 입력하면 모델 목록을 가져옵니다. 사고, 이미지 이해, 도구 기능을 인식해 해당 설정을 표시합니다.",
    "connectionsExtra": "공식 API, 호환 인터페이스, 서드파티 게이트웨이를 지원합니다. 필요하면 모델을 직접 추가하거나 기능 설정을 조정할 수 있습니다.",
    "providersLabel": "지원하는 모델 서비스",
    "customAPI": "사용자 API",
    "connectionNote": "Chat Completions, Responses, Anthropic 프로토콜 지원. 사용 가능한 기능은 모델과 서비스에 따라 다릅니다.",
    "htmlTitle": "HTML 태그를\n대화 안에서 바로 표시",
    "htmlBody": "답변의 HTML 태그를 접이식 패널, 표, 목록, 카드로 렌더링해 본문과 같은 메시지 안에 표시합니다.",
    "htmlExtra": "Markdown 서식, 코드 구문 강조와 복사도 지원합니다.",
    "htmlRealScreen": "앱에서 실제 표시 보기",
    "demoLabel": "HTML 태그 렌더링 예시",
    "demoControlLabel": "예시 보기 방식",
    "demoRendered": "렌더링",
    "demoSource": "HTML 태그",
    "demoQuestion": "토요일 일정을 정리해 줘.",
    "demoIntro": "오전에는 전시회, 오후에는 서점. 시간별 일정이에요.",
    "demoSummary": "토요일 일정",
    "demoMorning": "미술관 전시 관람",
    "demoNoon": "근처에서 점심",
    "demoAfternoon": "서점 둘러보기와 커피",
    "demoOutro": "출발 전에 전시회 운영 시간을 확인하세요.",
    "demoHint": "“토요일 일정”을 눌러 펼치거나 접어 보세요.",
    "copyCode": "코드 복사",
    "assistantsTitle": "여러 도우미\n각자의 설정",
    "assistantsBody": "글쓰기, 코딩, 개성 있는 캐릭터까지. 도우미마다 프롬프트, 기본 모델, 매개변수와 대화 기록을 따로 저장합니다.",
    "systemPromptTitle": "시스템 프롬프트",
    "systemPromptBody": "역할, 말투, 답변 조건을 설정하세요. 긴 프롬프트를 위한 넓은 편집 화면도 있습니다.",
    "affixTitle": "앞뒤에 붙이는 문구",
    "affixBody": "메시지를 보낼 때 자주 쓰는 지시를 자동으로 붙입니다. 순서 변경과 개별 켜기·끄기도 가능합니다.",
    "assistantShare": "설정한 프롬프트와 매개변수를 묶어서 공유할 수 있습니다.",
    "screenAssistantAlt": "DDchat 시스템 프롬프트와 앞뒤 문구 설정",
    "openAssistant": "도우미 설정 보기",
    "privacyTitle": "개인정보를 최우선으로",
    "privacyBody": "대화 기록과 도우미 설정은 내 기기에 저장됩니다.\n메시지는 DDchat 서버를 거치지 않고 선택한 서비스로 직접 전송됩니다.",
    "noAccount": "계정 가입 불필요",
    "noAds": "광고 없음",
    "noTracking": "추적 없음",
    "privacyLink": "개인정보 처리방침 읽기",
    "privacyNote": "모델이나 웹 기능 사용 시 해당 서비스의 개인정보 처리방침에 따라 콘텐츠가 처리됩니다.",
    "supportTitle": "자주 묻는 질문",
    "supportBody": "문제 제보 및 기능 제안",
    "faqKeyQuestion": "다운로드하면 바로 대화할 수 있나요?",
    "faqKeyAnswer": "서비스의 API 주소와 키를 추가하고 모델을 선택하세요. DDchat에는 AI 서비스가 포함되지 않으며 모델 사용료는 선택한 서비스에서 청구합니다.",
    "faqProviderQuestion": "어떤 서비스를 연결할 수 있나요?",
    "faqProviderAnswer": "Chat Completions, Responses, Anthropic 세 가지 프로토콜을 지원합니다. 해당 공식 API, 호환 서비스, 중계 서비스에 연결할 수 있으며 사용자 요청 헤더도 설정할 수 있습니다. 모델 목록은 자동으로 가져오거나 직접 추가할 수 있습니다.",
    "faqDeviceQuestion": "어떤 기기를 지원하나요?",
    "faqDeviceAnswer": "iOS 16.0 또는 iPadOS 16.0 이상을 사용하는 iPhone과 iPad를 지원합니다. 앱은 중국어 간체, 중국어 번체, 영어, 일본어, 한국어로 이용할 수 있습니다.",
    "faqCapabilityQuestion": "웹 검색과 이미지 이해를 지원하나요?",
    "faqCapabilityAnswer": "네. 여러 이미지를 보내거나 모델이 웹을 검색하고 읽은 뒤 출처를 표시하도록 할 수 있습니다. 지원 여부는 모델과 서비스에 따라 다르며 검색 서비스를 별도로 설정할 수도 있습니다.",
    "downloadTitle": "iPhone과 iPad에서\nDDchat을 만나보세요",
    "downloadBody": "iOS 16.0 이상과 개인 API 키가 필요합니다.",
    "footerPrivacy": "개인정보 처리방침",
    "contact": "문의하기",
    "actualScreen": "DDchat 실제 앱 화면",
    "close": "닫기",
    "readingTitle": "사고 과정과 답변을 구분해서",
    "readingBody": "생성 중인 사고 내용을 미리 보고, 필요할 때 펼쳐 읽으세요. 본문과 코드, 접이식 콘텐츠를 구분해 보여줍니다.",
    "readingAlt": "DDchat 사고 과정과 답변 구성",
    "libraryTitle": "자주 쓰는 도우미를 한눈에",
    "libraryBody": "카드를 끌어서 도우미 순서를 바꾸세요. 이전 대화를 이어가고, 새 답변은 처음부터 읽을 수 있습니다.",
    "copied": "복사됨",
    "copyFailed": "코드를 선택해 복사하세요",
    "title": "DDchat — 아름답고 간결한 iOS 네이티브 AI 클라이언트",
    "description": "iPhone과 iPad를 위한 네이티브 AI 클라이언트. 내 API 연결, 모델 자동 인식, 대화 속 HTML 렌더링, 도우미별 설정을 지원합니다.",
    "locale": "ko_KR"
  }
};

const languageSelect = document.getElementById("language-select");
const supportedLanguages = Object.keys(translations);
const storeRegions = { "zh-Hans": "cn", "zh-Hant": "tw", en: "us", ja: "jp", ko: "kr" };
const dialog = document.getElementById("screenshot-dialog");
const dialogScreen = document.getElementById("dialog-screen");
const screenAltKeys = { home: "screenHomeAlt", html: "screenHtmlAlt", search: "screenSearchAlt", provider: "screenProviderAlt", assistant: "screenAssistantAlt" };
const detailScenes = {
  composer: { screen: "html", title: "composerTitle", body: "composerBody", alt: "composerAlt" },
  reading: { screen: "html", title: "readingTitle", body: "readingBody", alt: "readingAlt" },
  assistants: { screen: "home", title: "libraryTitle", body: "libraryBody", alt: "screenHomeAlt" }
};
let currentLanguage = "zh-Hans";
let currentDetail = "composer";
let currentDialogScreen = "html";
let copyResetTimer;

function normalizedLanguage(language) {
  if (!language) return "zh-Hans";
  if (supportedLanguages.includes(language)) return language;
  const value = language.toLowerCase();
  if (/^zh-(hant|tw|hk|mo)/.test(value)) return "zh-Hant";
  if (value.startsWith("zh")) return "zh-Hans";
  if (value.startsWith("ja")) return "ja";
  if (value.startsWith("ko")) return "ko";
  return "en";
}
function storedLanguage() {
  try { return localStorage.getItem("ddchat-language"); }
  catch (_) { return null; }
}
function screenshotSource(scene) {
  const extension = scene === "provider" || scene === "assistant" ? "png" : "webp";
  const revision = currentLanguage === "zh-Hans" && scene === "search" ? "?v=20260906" : "";
  return "assets/screens/" + currentLanguage + "-" + scene + "." + extension + revision;
}
function updateDetail() {
  const scene = detailScenes[currentDetail];
  const copy = translations[currentLanguage];
  document.querySelector(".design-showcase").dataset.detail = currentDetail;
  const title = document.getElementById("detail-title");
  const body = document.getElementById("detail-body");
  title.dataset.i18n = scene.title;
  body.dataset.i18n = scene.body;
  title.textContent = copy[scene.title];
  body.textContent = copy[scene.body];
  const img = document.getElementById("detail-image");
  img.dataset.screen = scene.screen;
  img.dataset.altI18n = scene.alt;
  img.alt = copy[scene.alt];
  img.src = screenshotSource(scene.screen);
  document.querySelectorAll("[data-detail-button]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.detailButton === currentDetail));
  });
}
function escapedHTML(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function updateExampleSource() {
  const copy = translations[currentLanguage];
  const t = key => escapedHTML(copy[key]);
  const source = [
    "<p>" + t("demoIntro") + "</p>",
    "<details open>",
    "  <summary>" + t("demoSummary") + "</summary>",
    "  <table>",
    "    <tr><th>10:00</th><td>" + t("demoMorning") + "</td></tr>",
    "    <tr><th>12:00</th><td>" + t("demoNoon") + "</td></tr>",
    "    <tr><th>14:00</th><td>" + t("demoAfternoon") + "</td></tr>",
    "  </table>",
    "</details>",
    "<p>" + t("demoOutro") + "</p>"
  ].join("\n");
  document.getElementById("demo-source-code").textContent = source;
}
function updateDialogImage() {
  dialogScreen.src = screenshotSource(currentDialogScreen);
  dialogScreen.alt = translations[currentLanguage][screenAltKeys[currentDialogScreen]];
}
function showLanguage(language, updateURL = false) {
  currentLanguage = normalizedLanguage(language);
  const copy = translations[currentLanguage];
  clearTimeout(copyResetTimer);
  document.documentElement.lang = currentLanguage;
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelector('meta[property="og:title"]').content = copy.title;
  document.querySelector('meta[property="og:description"]').content = copy.description;
  document.querySelector('meta[property="og:locale"]').content = copy.locale;
  languageSelect.value = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll("[data-aria-i18n]").forEach(element => {
    element.setAttribute("aria-label", copy[element.dataset.ariaI18n]);
  });
  document.querySelectorAll("[data-alt-i18n]").forEach(element => {
    element.alt = copy[element.dataset.altI18n];
  });
  document.querySelectorAll("[data-screen]").forEach(element => {
    element.src = screenshotSource(element.dataset.screen);
  });
  document.querySelectorAll("[data-store-link]").forEach(link => {
    link.href = "https://apps.apple.com/" + storeRegions[currentLanguage] + "/app/ddchat-ai/id6766894679";
  });
  document.querySelectorAll("[data-privacy-link]").forEach(link => {
    link.href = "privacy-policy.html?lang=" + encodeURIComponent(currentLanguage);
  });
  updateDetail();
  updateExampleSource();
  updateDialogImage();
  try { localStorage.setItem("ddchat-language", currentLanguage); }
  catch (_) { /* Language selection remains available when storage is blocked. */ }
  if (updateURL) {
    const url = new URL(location.href);
    url.searchParams.set("lang", currentLanguage);
    history.replaceState({}, "", url);
  }
}
function openScreenshot(scene) {
  if (!Object.hasOwn(screenAltKeys, scene)) return;
  currentDialogScreen = scene;
  updateDialogImage();
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add("dialog-open");
}
function closeScreenshot() {
  dialog.close();
  document.body.classList.remove("dialog-open");
}
document.querySelectorAll("[data-open-screen]").forEach(button => {
  button.addEventListener("click", () => openScreenshot(button.dataset.openScreen));
});
document.querySelector("[data-open-detail]").addEventListener("click", () => openScreenshot(detailScenes[currentDetail].screen));
document.querySelector(".dialog-close").addEventListener("click", closeScreenshot);
dialog.addEventListener("click", event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) closeScreenshot();
});
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
dialog.addEventListener("cancel", () => document.body.classList.remove("dialog-open"));
document.querySelectorAll("[data-detail-button]").forEach(button => {
  button.addEventListener("click", () => { currentDetail = button.dataset.detailButton; updateDetail(); });
});
document.querySelectorAll("[data-demo-view]").forEach(button => {
  button.addEventListener("click", () => {
    const source = button.dataset.demoView === "source";
    document.getElementById("rendered-example").hidden = source;
    document.getElementById("source-example").hidden = !source;
    document.querySelectorAll("[data-demo-view]").forEach(control => {
      control.setAttribute("aria-pressed", String(control === button));
    });
  });
});
const copyButton = document.getElementById("copy-demo");
copyButton.setAttribute("aria-live", "polite");
copyButton.addEventListener("click", async () => {
  const copy = translations[currentLanguage];
  try {
    await navigator.clipboard.writeText(document.getElementById("demo-source-code").textContent);
    copyButton.textContent = copy.copied;
  } catch (_) {
    const range = document.createRange();
    range.selectNodeContents(document.getElementById("demo-source-code"));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = copy.copyFailed;
  }
  clearTimeout(copyResetTimer);
  copyResetTimer = setTimeout(() => { copyButton.textContent = translations[currentLanguage].copyCode; }, 2500);
});
languageSelect.addEventListener("change", event => showLanguage(event.target.value, true));
const requestedLanguage = new URLSearchParams(location.search).get("lang");
const browserLanguage = (navigator.languages && navigator.languages[0]) || navigator.language;
showLanguage(requestedLanguage || storedLanguage() || browserLanguage);
