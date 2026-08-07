# State Management কী?

State বলতে বোঝায় এমন data যা সময়ের সাথে পরিবর্তন হয়। যেমন:

* Logged-in user
* Shopping cart
* Theme (Light/Dark)
* Notifications
* API থেকে আনা data

উদাহরণ:

```js
const user = {
  name: "Rahim",
  isLoggedIn: true
};
```

---

## State Management না করলে কী সমস্যা হয়?

ধরুন আপনার component structure এমন:

```
App
├── Navbar
├── ProductList
├── Cart
└── Profile
```

Shopping cart-এর data `ProductList`-এ update হচ্ছে, কিন্তু `Navbar`-এ cart count এবং `Cart` component-এও সেই data দরকার।

State management ছাড়া আপনাকে:

```
App
  ↓
Navbar
  ↑
App
  ↓
ProductList
  ↑
App
  ↓
Cart
```

বারবার parent-এর মাধ্যমে data pass করতে হবে (prop drilling)।

---

## Prop Drilling Problem

```jsx
<App>
   ↓
<Layout>
   ↓
<Home>
   ↓
<Product>
   ↓
<Button />
```

যদি `Button`-এর user data দরকার হয়, তাহলে:

```jsx
<App user={user}>
  <Layout user={user}>
    <Home user={user}>
      <Product user={user}>
        <Button user={user} />
      </Product>
    </Home>
  </Layout>
</App>
```

এভাবে প্রতিটি component-এ অপ্রয়োজনীয় prop pass করতে হয়।

---

## State Management থাকলে

সব component একই store থেকে data নেয়।

```
           Store
        /    |    \
 Navbar Product Cart
```

যে component-এর data দরকার, সে সরাসরি store থেকে পড়তে পারে।

```jsx
const cart = useSelector(state => state.cart);
```

অথবা Vue-তে:

```js
const cart = useCartStore();
```

---

## আর কী কী সুবিধা?

### ১. Single Source of Truth

সব data এক জায়গায় থাকে।

```
Store
 ├── user
 ├── cart
 ├── products
 └── theme
```

---

### সহজ উদাহরণ

State management ছাড়া:

```
Product → App → Layout → Header
```

State management দিয়ে:

```
Product → Store ← Header
```

অর্থাৎ, **state management-এর মূল উদ্দেশ্য হলো shared data-কে একটি কেন্দ্রীয় জায়গায় রাখা, prop drilling কমানো, state update-কে predictable করা এবং বড় application-কে সহজে maintain ও scale করা।**
