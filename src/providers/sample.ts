import type {
  GenerateParams,
  GenerateTextResult,
  LanguageModel,
  Message,
  Provider,
} from "../types";

export function createProvider(config?: { apiKey?: string }): Provider {
  // 1. SDK クライアントの初期化
  const client = new SDK({ apiKey: config?.apiKey });

  // 2. メッセージ変換関数
  function convertMessages(messages: Message[]) {
    /* ... */
  }

  // 3. 終了理由マッピング関数: 各社固有の値 → 統一型
  function mapFinishReason(reason: string): FinishReason {
    /* ... */
  }

  // 4. "LanguageModel を返すファクトリ関数" を返す
  return (modelId: string): LanguageModel => ({
    async doGenerate(params: GenerateParams): Promise<GenerateTextResult> {
      // ツール定義を各社形式に変換
      // SDKで生成を実行
      // 応答を統一的に変換して返す
    },
  });
}
