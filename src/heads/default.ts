document.querySelector<HTMLHeadElement>('#main')!.innerHTML += `
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/cd-icon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Basic SEO Meta Tags (will be updated dynamically) -->
    <meta name="description" content="CD-Labs creates complete gaming experiences for busy lives. Discover handcrafted games designed to be finished in a single sitting." />
    <meta name="keywords" content="game development, indie games, minimalist games, complete gaming experiences, CD Labs" />
    <meta name="author" content="CD" />
    <meta name="robots" content="index, follow" />
    
    <!-- Open Graph Meta Tags (will be updated dynamically) -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="CD-Labs" />
    <meta property="og:locale" content="en_US" />
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@cd.oucet" />
    
    <!-- Preconnect for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Handjet:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-D1LL1BJ7ZR"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-D1LL1BJ7ZR');
    </script>
`