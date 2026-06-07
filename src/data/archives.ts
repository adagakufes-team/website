export const archives = {
  "2025": {
    title: "第1回あだち大学フェス",
    date: "2025.08.29",

    overview: "足立区内の大学が集まり、地域と学生をつなぐ交流イベントとして開催しました。",

    website: "https://www.sg.dendai.ac.jp/s1b-life/adagaku-fes",

    exhibitors: [
      {
        university: "東京電機大学",
        name: "ダイビングサークル",
        image: "/archive/2025/exhibitors/diving.jpg",

        description: "スキューバダイビング体験や水中写真の展示を実施しました。",

        website: "https://example.com",
        sns: "https://instagram.com/example",
      },

      {
        university: "東京藝術大学",
        name: "芸術研究会",
        image: "/archive/2025/exhibitors/art.jpg",

        description: "学生作品の展示とライブペイントを実施しました。",

        website: "https://example.com",
        sns: "https://x.com/example",
      },
    ],

    photos: ["/archive/2025/photo1.jpg", "/archive/2025/photo2.jpg", "/archive/2025/photo3.jpg"],
  },
} as const;
