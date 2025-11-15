<!DOCTYPE html>
<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Fodé Momo Soumah - Full-Stack Developer</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#0d7ff2",
              "background-light": "#f5f7f8",
              "background-dark": "#101922",
            },
            fontFamily: {
              "display": ["Space Grotesk", "sans-serif"]
            },
            borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
          },
        },
      }
    </script>

</head>
<body class="bg-background-light dark:bg-background-dark font-display text-gray-300">
<div class="particle p1"></div>
<div class="particle p2"></div>
<div class="particle p3"></div>
<div class="particle p4"></div>
<div class="relative flex min-h-screen w-full flex-col">
<div class="flex h-full grow flex-col">
<div class="flex flex-1 justify-center px-4 sm:px-8 md:px-10">
<div class="flex w-full max-w-5xl flex-col">
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap px-6 py-4 rounded-full mt-6 frosted-glass">
<div class="flex items-center gap-4">
<div class="size-6 text-primary">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
</svg>
</div>
<h2 class="text-white text-xl font-bold">Fodé Momo Soumah</h2>
</div>
<nav class="hidden md:flex flex-1 justify-end gap-10">
<a class="text-white/80 hover:text-white transition-colors text-base font-medium" href="#">About</a>
<a class="text-white/80 hover:text-white transition-colors text-base font-medium" href="#">Projects</a>
<a class="text-white/80 hover:text-white transition-colors text-base font-medium" href="#">Skills</a>
<a class="text-white/80 hover:text-white transition-colors text-base font-medium" href="#">Contact</a>
</nav>
</header>
<main class="flex-grow flex items-center">
<div class="w-full text-center py-20 md:py-32">
<div class="relative inline-block mb-10">
<img class="w-40 h-40 rounded-full object-cover border-4 border-background-dark" data-alt="Professional headshot of Fodé Momo Soumah" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd_bVqT3QhoFxd4huqzzVy-6HowSyMat7HyPSu6CEYkAq_Pi2GbWPdwukZXcnt8RgC1DcDAoPO6CS8Y6JHhypkSH5iSmr9NarLUXgIv2xlDLjyOrOoiaZJBo5jR51MpzVI6MMijme3qUqBAX9xoK5yHTHWVtZBuXiX7dFANRM_hSYaY7-JLKPWTRiKdLNDBlUVcnHjjtZmTSnOtw4KcbFMeGJ_8ZacQj-1-3T2Hb48S5b3DoBydMIaUSSD2R0ok68xg3hkkN-4ETSi"/>
<div class="absolute inset-0 rounded-full ring-4 ring-cyan-400/80 ring-offset-4 ring-offset-background-dark animate-pulse"></div>
<div class="absolute inset-0 rounded-full shadow-[0_0_60px_10px] shadow-cyan-400/50"></div>
</div>
<h1 class="text-white text-5xl md:text-7xl font-bold leading-tight tracking-tighter mb-4">
                                Hi, I'm Fodé Momo Soumah
                            </h1>
<p class="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                                Full-Stack Developer — React, React Native, Node.js
                            </p>
<div class="flex flex-wrap gap-4 justify-center">
<button class="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary text-white text-lg font-bold shadow-[0_0_20px] shadow-primary/40 transition-transform hover:scale-105">
<span>See Projects</span>
</button>
<button class="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-transparent text-white/90 border-2 border-white/20 hover:border-white/50 hover:bg-white/10 transition-all">
<span>Download CV</span>
</button>
</div>
</div>
</main>
<footer class="flex flex-col gap-8 items-center justify-center py-10 text-center border-t border-white/10">
<div class="flex flex-wrap items-center justify-center gap-6 md:gap-12">
<a class="text-white/60 hover:text-white transition-colors text-base font-normal leading-normal" href="#">About</a>
<a class="text-white/60 hover:text-white transition-colors text-base font-normal leading-normal" href="#">Projects</a>
<a class="text-white/60 hover:text-white transition-colors text-base font-normal leading-normal" href="#">Contact</a>
</div>
<div class="flex flex-wrap justify-center gap-6">
<a class="text-white/60 hover:text-white transition-colors" href="#">
<svg class="feather feather-github" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
</a>
<a class="text-white/60 hover:text-white transition-colors" href="#">
<svg class="feather feather-linkedin" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a class="text-white/60 hover:text-white transition-colors" href="#">
<svg class="feather feather-twitter" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
</a>
</div>
<p class="text-white/60 text-sm font-normal">© 2024 Fodé Momo Soumah. All rights reserved.</p>
</footer>
</div>
</div>
</div>
</div>
</body></html>