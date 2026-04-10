# あだち大学フェス 公式サイト

足立区内の大学が合同で開催する学園祭「あだち大学フェス」の公式Webサイトです。

- URL: https://adagakufes.com
- ホスティング: Cloudflare Pages

## 開発ルール

### ブランチ構成

```
main        ← 本番環境にデプロイされるブランチ
 └── develop    ← 開発用ブランチ（作業ブランチのマージ先）
      └── feat/xxx  ← 作業ブランチ（developから切る）
```

- `main`: 本番デプロイ用。直接pushは禁止
- `develop`: 開発の統合ブランチ。直接pushは禁止
- 作業ブランチ: `develop` から切って作業し、`develop` にPRを出す

### 作業の流れ

1. `develop` ブランチから作業ブランチを作成する
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feat/〇〇
   ```
2. 作業が終わったら `develop` に向けてPRを作成する
3. **1人以上のapprove** を受けてからマージする
4. リリース時に `develop` → `main` へPRを作成し、approveを受けてマージする

### ブランチ名の例

| 種類 | 命名例 |
|------|--------|
| 機能追加 | `feat/top-page` |
| 修正 | `fix/header-layout` |
| スタイル調整 | `style/font-update` |

### コミットメッセージ

`prefix: 内容` の形式で日本語で書いてください。

```
feat: トップページを追加
fix: ヘッダーのレイアウトを修正
style: フォントサイズを調整
docs: READMEを更新
chore: 依存パッケージを更新
```

| prefix | 用途 |
|--------|------|
| `feat` | 新しい機能の追加 |
| `fix` | バグ修正 |
| `style` | 見た目の調整（機能変更なし） |
| `docs` | ドキュメントの変更 |
| `chore` | ビルド設定や依存関係など、コード以外の変更 |

### 注意事項

- `main` / `develop` への直接pushはブランチ保護により禁止されています
- PRには作業内容の簡単な説明を書いてください
- マージ後の作業ブランチは削除してください
