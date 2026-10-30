# রুমাস বুটিক | Ruma's Boutique 💗

*"আপনার সৌন্দর্যে, আমাদের ছোঁয়া"*

নারীদের থ্রি-পিস ও ফ্যাশনেবল পোশাকের অনলাইন স্টোরের জন্য ল্যান্ডিং পেজ —
শুধুমাত্র **HTML5, CSS3 ও Vanilla JavaScript** দিয়ে তৈরি, কোনো ফ্রেমওয়ার্ক ছাড়া।
GitHub Pages-এ ফ্রি হোস্ট করার জন্য প্রস্তুত।

## 📁 ফাইল স্ট্রাকচার

```
rumasboutique/
├── index.html        → মূল পেজ (সব সেকশন)
├── style.css         → সম্পূর্ণ ডিজাইন (mobile-first, রেসপনসিভ)
├── script.js         → মোবাইল মেনু, স্ক্রল-স্পাই, রিভিল অ্যানিমেশন ইত্যাদি
├── README.md
└── asset/
    ├── logo.jpeg         → মূল লোগো (সোর্স ফাইল)
    ├── logo-small.jpeg   → হেডার/ফুটারের জন্য অপ্টিমাইজড লোগো
    ├── favicon.png       → ব্রাউজার ট্যাব আইকন
    ├── apple-touch-icon.png
    ├── cover_01.jpeg     → ব্র্যান্ড ব্যানার
    └── cover_02.jpeg     → হিরো সেকশনের ছবি (পোশাকের র‍্যাক)
```

## ✏️ কাস্টমাইজ করবেন যেভাবে

### ১. সোশ্যাল মিডিয়া ও যোগাযোগের লিংক — `index.html`

সাইটের সব লিংক সরাসরি `index.html`-এ দেওয়া আছে। নিচের লিংকগুলো খুঁজে নিজের লিংক বসিয়ে নিন:

| লিংক | কোথায় আছে |
|---|---|
| ফেসবুক পেজ | `https://www.facebook.com/share/1FVFpT1FJp/` (হিরো, কালেকশন, যোগাযোগ, ফুটার) |
| ইউটিউব | `https://www.youtube.com/@rumasboutique` |
| টিকটক | `https://www.tiktok.com/@rumasboutique` |
| মেসেঞ্জার (অর্ডার) | `https://m.me/rumasboutique91` |
| হোয়াটসঅ্যাপ | `https://wa.me/8801715461617` |
| ফোন / ইমেইল | যোগাযোগ সেকশন ও ফুটার |

> **Messenger লিংক:** আপনার ফেসবুক পেজের ইউজারনেম (যেমন `rumasboutique91`)
> জানলেই লিংকটি হবে `https://m.me/ইউজারনেম`।

### ২. রং বদলাতে — `style.css`

ফাইলের একদম উপরে `:root`-এ সব রঙের ভ্যারিয়েবল আছে (`--clr-primary`, `--clr-gold` ইত্যাদি)।

## 🚀 GitHub Pages-এ ফ্রি হোস্টিং (ধাপে ধাপে)

1. **github.com**-এ অ্যাকাউন্ট খুলুন / লগইন করুন।
2. উপরের ডান কোণায় **+ → New repository** ক্লিক করুন।
3. Repository name দিন: `rumasboutique` → **Public** রাখুন → **Create repository**।
4. পেজের ভেতরে **"uploading an existing file"** লিংকে ক্লিক করুন।
5. প্রজেক্টের সব ফাইল ও `asset` ফোল্ডার টেনে এনে (drag & drop) ছেড়ে দিন।
6. নিচে **Commit changes** বাটনে ক্লিক করুন।
7. রিপোজিটরিতে **Settings → Pages** (বাম মেনু) →
   **Source: Deploy from a branch** → Branch: **main**, Folder: **/(root)** → **Save**।
8. ১–২ মিনিট পর আপনার সাইট লাইভ হবে:
   `https://আপনার-ইউজারনেম.github.io/rumasboutique/`
9. লাইভ লিংক পাওয়ার পর `index.html`-এর `<head>`-এ `USERNAME` লেখা দুটি জায়গায়
   আসল লিংক বসিয়ে দিন (canonical ও og:url — SEO-র জন্য)।

## ✨ ফিচারসমূহ

- 📱 সম্পূর্ণ রেসপনসিভ (মোবাইল, ট্যাব, ডেস্কটপ) — mobile-first ডিজাইন
- 🛍️ কালেকশন সেকশন — ফেসবুক পেজ, ইউটিউব ও টিকটকে সম্পূর্ণ কালেকশন দেখার আহ্বান
- 💬 মেসেঞ্জার ও হোয়াটসঅ্যাপ অর্ডার বাটন
- 🧭 স্টিকি নেভিগেশন + মোবাইল হ্যামবার্গার মেনু + স্মুথ স্ক্রল + স্ক্রল-স্পাই
- 🔍 SEO: meta tags, Open Graph, JSON-LD (`ClothingStore`), বাংলা alt টেক্সট
- ⚡ পারফরম্যান্স: lazy loading, অপ্টিমাইজড লোগো, সিস্টেম ফন্ট ফলব্যাক
- ♿ অ্যাক্সেসিবিলিটি: semantic HTML, keyboard navigation, reduced-motion সাপোর্ট
