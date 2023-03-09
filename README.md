# nextjs-ssg-layout-variants-poc

Basic implementation of layout variants (A/B testing) in NextJS with SSG (getStaticProps)

Add query param `?variant=a|b` in the URL or `variant=a|b` in the cookies to render the correct layout. Once you change the query param, it persists in the cookies.
