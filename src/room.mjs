// Original inline SVG artwork. No remote assets, fonts or image downloads.
export const roomMarkup=`<svg class="room-art" viewBox="0 0 1000 670" xmlns="http://www.w3.org/2000/svg" aria-label="温暖的小房间：窗户、小床、地毯、植物和小兔子">
<defs>
 <linearGradient id="wall" x2="0" y2="1"><stop stop-color="#eee5d5"/><stop offset="1" stop-color="#f5eddc"/></linearGradient>
 <linearGradient id="sky" x2="0" y2="1"><stop class="sky-top" stop-color="#c8dacf"/><stop class="sky-bottom" offset="1" stop-color="#edf0d5"/></linearGradient>
 <linearGradient id="floor" x2="0" y2="1"><stop stop-color="#e1c9ac"/><stop offset="1" stop-color="#efddc3"/></linearGradient>
 <radialGradient id="fur"><stop stop-color="#fffdf4"/><stop offset="1" stop-color="#eee6d8"/></radialGradient>
 <pattern id="paper" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="1" cy="3" r=".65" fill="#927b61" opacity=".07"/><circle cx="5" cy="6" r=".45" fill="#fff" opacity=".3"/></pattern>
 <pattern id="blanket" width="27" height="27" patternUnits="userSpaceOnUse"><rect width="27" height="27" fill="#adb99a"/><path d="M0 0h27M0 13h27M0 27V0M13 0v27" stroke="#e3e6cb" stroke-width="7" opacity=".5"/></pattern>
 <pattern id="rug" width="15" height="15" patternUnits="userSpaceOnUse"><rect width="15" height="15" fill="#e2c3a9"/><path d="M0 2h15M0 9h15" stroke="#f6dfc4" stroke-width="2" opacity=".6"/></pattern>
 <clipPath id="window-clip"><path d="M121 105q0-40 40-40h162q40 0 40 40v177H121z"/></clipPath>
 <filter id="soft"><feGaussianBlur stdDeviation="7"/></filter>
</defs>
<path fill="url(#wall)" d="M0 0h1000v444H0z"/><path fill="url(#floor)" d="M0 444h1000v226H0z"/>
<path d="M0 440q410 7 1000 0v12H0" fill="#d4bfa5"/><path d="M0 455h1000M0 542h1000M0 633h1000M203 453l-41 217M497 453v217M786 453l60 217" fill="none" stroke="#c6ac8d" stroke-width="2" opacity=".25"/>
<path class="sunbeam" d="M128 219l230 16 360 368-388 22z" fill="#fff8d9" opacity=".22"/>
<!-- window -->
<g id="window-hit" class="scene-target" role="button" tabindex="0" aria-label="看看窗外">
<path d="M111 101q0-47 47-47h169q47 0 47 47v195H111z" fill="#d4bea0" stroke="#a58e73" stroke-width="3"/>
<g clip-path="url(#window-clip)"><path fill="url(#sky)" d="M121 65h242v220H121z"/><circle class="sun" cx="292" cy="118" r="25" fill="#fff0b8"/><path class="moon" d="M288 92a27 27 0 1 0 30 38c-30 6-45-13-30-38" fill="#fff0bf"/>
<g class="window-stars" fill="#fff5d6"><circle cx="155" cy="99" r="2"/><circle cx="230" cy="132" r="2"/><circle cx="335" cy="176" r="2"/><path d="M198 77v9m-4-4h8" stroke="#fff5d6"/></g>
<g class="cloud" fill="#faf9e9" opacity=".7"><ellipse cx="166" cy="151" rx="42" ry="9"/><ellipse cx="184" cy="144" rx="20" ry="15"/><ellipse cx="302" cy="210" rx="48" ry="9"/></g>
<path d="M100 261q55-62 111-7 69-82 174-7v60H100z" fill="#a2b497"/><path d="M111 280q100-35 144-8 90-46 125-9v44H111z" fill="#839d82"/>
</g><path d="M239 69v213M122 183h239" stroke="#e8d8bd" stroke-width="11"/><path d="M117 285h252v15H117z" fill="#e8d8bd" stroke="#ac9576" stroke-width="2"/>
<path d="M95 57q3 85-3 163l43-9q-20-96 21-154M333 57q29 85 14 154l43 9q-14-89-3-163" fill="#f8f1e3" stroke="#d4c9b5" stroke-width="2"/><path d="M108 67q-2 75 8 124M371 67q-6 72-3 130" stroke="#e1d7c5" stroke-width="3" fill="none"/>
</g>
<!-- wall trinkets -->
<g stroke="#a69279" stroke-width="2"><path d="M522 77l-29 33h58z" fill="none"/><rect x="482" y="108" width="80" height="91" rx="3" fill="#d6b994"/><rect x="490" y="116" width="64" height="75" fill="#f7f0df" stroke="none"/></g>
<path d="M523 175v-39m0 20q-24-2-16-17 18 0 16 17m0-4q23-8 16-19-21 5-16 19" fill="#9aa98a" stroke="#7c906d" stroke-width="2"/>
<g transform="translate(697 106)"><path d="M0 65h205v14H0z" fill="#c8ac88" stroke="#a48b6e" stroke-width="2"/><path d="M22 78v17m161-17v17" stroke="#a48b6e" stroke-width="5"/><g stroke="#ad977a" stroke-width="2"><path d="M18 14h20v50H18z" fill="#b0b49a"/><path d="M40 7h17v57H40z" fill="#dbb6a0"/><path d="M59 20h26v44H59z" fill="#eee0bc"/><path d="M21 24h14m8-5h10m10 12h17"/></g><path d="M115 39q-11-33 9-26 17-33 24 5 21-2 7 22" fill="#a7b291"/><path d="M112 37h47l-8 28h-31z" fill="#d9b6a2"/><circle cx="183" cy="51" r="13" fill="#e9d8b8"/><path d="M183 41v11l6 4" fill="none" stroke="#a98e6e" stroke-width="2"/></g>
<!-- unlocked paper garland -->
<g data-decor="garland" class="decoration" style="display:none"><path d="M415 35q150 80 270 0" fill="none" stroke="#b29a75" stroke-width="2"/><g fill="#d5b872" stroke="#b39a62" stroke-width="1.5"><path d="m450 59 4 10 11 1-8 7 2 10-9-5-9 5 2-10-8-7 11-1z"/><path d="m540 78 4 10 11 1-8 7 2 10-9-5-9 5 2-10-8-7 11-1z"/><path d="m632 61 4 10 11 1-8 7 2 10-9-5-9 5 2-10-8-7 11-1z"/></g></g>
<!-- bed -->
<ellipse cx="229" cy="490" rx="167" ry="21" fill="#ad9475" opacity=".13"/>
<g id="bed-hit" class="scene-target" role="button" tabindex="0" aria-label="小床：休息或叫醒小兔子"><path d="M79 366v146m302-116v116" stroke="#ac8c68" stroke-width="14" stroke-linecap="round"/><path d="M79 379q0-61 48-62h42v105H79z" fill="#d6b68d" stroke="#ac8c68" stroke-width="3"/><path d="M90 389h271q30 1 26 62H85z" fill="#f6ead5" stroke="#c5ab86" stroke-width="3"/><path d="M176 392q91-17 201 7v58H176z" fill="url(#blanket)" stroke="#8d9c7c" stroke-width="2"/><rect x="93" y="372" width="93" height="36" rx="17" fill="#fff8e9" stroke="#dccdb4" stroke-width="2" transform="rotate(-5 93 372)"/><path d="M76 457h313v19H76z" fill="#d3b186" stroke="#aa8b67" stroke-width="3"/><path d="M190 406v41m12-43v43" stroke="#e6e7cf" stroke-width="2" opacity=".7"/></g>
<!-- cabinet -->
<ellipse cx="833" cy="491" rx="111" ry="16" fill="#ad9475" opacity=".13"/><g stroke="#b39b78" stroke-width="2.5"><path d="M758 373h153v106H758z" fill="#d9c19c"/><path d="M754 360h161v18H754z" fill="#e7d3b1"/><path d="M770 392h130v33H770zM770 436h130v29H770z" fill="#e5cfac"/><path d="M770 479v18m129-18v18" stroke-width="7"/><circle cx="835" cy="408" r="4" fill="#b19975"/><circle cx="835" cy="451" r="4" fill="#b19975"/></g>
<path d="M774 344h49v15h-49z" fill="#a8b091"/><path d="M779 331h45v12h-45z" fill="#e5bca5"/><path d="M781 335h38" stroke="#f5e6d1" stroke-width="2"/>
<g data-decor="flowers" class="decoration" style="display:none"><path d="M848 329q-10 18 0 32h25q10-15 0-32z" fill="#b3c6be" stroke="#8ca99d" stroke-width="2"/><path d="M860 334v-47m0 30 17-27m-17 33-14-20" stroke="#829b77" stroke-width="3"/><g fill="#e2ad9c"><circle cx="860" cy="286" r="10"/><circle cx="877" cy="291" r="8"/><circle cx="846" cy="302" r="7"/></g><circle cx="860" cy="286" r="3" fill="#f5df9f"/></g>
<g data-decor="picture" class="decoration" style="display:none"><rect x="610" y="159" width="60" height="73" rx="3" fill="#ba9a77" transform="rotate(4 640 195)"/><rect x="617" y="166" width="46" height="59" fill="#f8edda"/><ellipse cx="640" cy="203" rx="15" ry="13" fill="#fffaf0"/><path d="M634 193q-11-25-2-22l5 22m7 0q-2-27 6-22l-2 24" fill="#fffaf0"/><path d="m636 207 4 3 4-3" fill="none" stroke="#c1a58e"/></g>
<g data-decor="moon" class="decoration moon-lamp" style="display:none"><circle cx="891" cy="320" r="36" fill="#ffe5a0" opacity=".2" filter="url(#soft)"/><path d="M888 291a28 28 0 1 0 20 43q-33 5-20-43" fill="#f4dc9e" stroke="#d3b577" stroke-width="2"/><path d="M874 354h35v7h-35z" fill="#b59b77"/></g>
<!-- plant -->
<g id="plant-hit" class="scene-target" role="button" tabindex="0" aria-label="看看植物"><ellipse cx="696" cy="476" rx="39" ry="12" fill="#b6a080" opacity=".15"/><path d="M671 424h54l-7 49q-22 12-40 0z" fill="#c8977c" stroke="#aa8169" stroke-width="2"/><path d="M669 421h58v12h-58z" fill="#d6a78c" stroke="#aa8169" stroke-width="2"/><g class="plant-leaves"><path d="M697 424q-7-75 8-113m-9 90-25-34m28 16 27-34" fill="none" stroke="#718665" stroke-width="4"/><path d="M703 350q-31-22-10-44 28 7 10 44M696 388q-39 3-37-30 31-7 37 30M703 373q0-38 31-38 9 29-31 38M697 414q-29 6-34-17 28-12 34 17" fill="#92a27d" stroke="#788d69" stroke-width="2"/><path id="new-leaf" d="M702 409q6-33 31-23-4 27-31 23" fill="#b0bc8c" stroke="#8d9d74" stroke-width="2"/></g></g>
<!-- rug & toys -->
<ellipse cx="500" cy="550" rx="240" ry="80" fill="#cbb28e" opacity=".14"/><ellipse cx="500" cy="537" rx="232" ry="77" fill="url(#rug)" stroke="#c4a483" stroke-width="3"/><ellipse cx="500" cy="537" rx="215" ry="64" fill="none" stroke="#f4ddc1" stroke-width="3" stroke-dasharray="5 6"/><path d="M278 525l-18-2m18 12-20 1m21 11-18 4m462-26 18-2m-18 12 20 1m-21 11 18 4" stroke="#c4a483" stroke-width="3"/>
<g data-decor="cushion" class="decoration" style="display:none"><path d="M335 531q-14-19 11-32 37-14 59 8 16 23-13 33-41 10-57-9" fill="#d5a79b" stroke="#bd9084" stroke-width="2"/><path d="m367 510 8 6-8 10-7-10z" fill="#bd7e74"/><path d="m359 509 9 5 9-6" stroke="#8e9e7c" stroke-width="3" fill="none"/></g>
<g id="ball" transform="translate(654 560)"><circle cy="5" r="24" fill="#cfb797" opacity=".2"/><circle r="23" fill="#bcbaa0" stroke="#959a7f" stroke-width="2"/><path d="M-14-18q30 15 24 38M-22 2q25-15 39-15" stroke="#e3dfbf" stroke-width="6" fill="none"/></g>
<!-- rabbit, articulated around its own centre -->
<ellipse class="bunny-shadow" cx="502" cy="548" rx="71" ry="17" fill="#b09479" opacity=".19"/>
<g id="bunny-hit" class="scene-target" role="button" tabindex="0" aria-label="摸摸小兔子的头"><g id="bunny" transform="translate(500 480)"><g class="bunny-body"><ellipse cx="52" cy="28" rx="21" ry="20" fill="#faf5e9" stroke="#d1c3ae" stroke-width="2"/><ellipse cy="20" rx="55" ry="59" fill="url(#fur)" stroke="#c9bca9" stroke-width="2.5"/><ellipse cx="-28" cy="61" rx="26" ry="12" fill="#faf6ea" stroke="#c9bca9" stroke-width="2"/><ellipse cx="30" cy="61" rx="26" ry="12" fill="#faf6ea" stroke="#c9bca9" stroke-width="2"/>
<g class="bunny-head"><g class="ear ear-left"><path d="M-36-46q-36-105-7-115 31-4 34 111" fill="url(#fur)" stroke="#c9bca9" stroke-width="2.5"/><path d="M-31-67q-25-75-13-77 16-1 20 77" fill="#e8c6bd"/></g><g class="ear ear-right"><path d="M9-49q4-107 34-107 29 9-6 112" fill="url(#fur)" stroke="#c9bca9" stroke-width="2.5"/><path d="M22-67q5-75 20-74 14 6-11 77" fill="#e8c6bd"/></g>
<path d="M-57-23q-3-55 56-57 59 0 59 56 6 48-57 48-65-1-58-47" fill="url(#fur)" stroke="#c9bca9" stroke-width="2.5"/>
<g class="eyes-open" fill="#6c6057"><ellipse cx="-22" cy="-25" rx="4.5" ry="6"/><ellipse cx="24" cy="-25" rx="4.5" ry="6"/><circle cx="-23" cy="-27" r="1.4" fill="#fff"/><circle cx="23" cy="-27" r="1.4" fill="#fff"/></g>
<g class="eyes-closed" stroke="#77675a" stroke-width="3" stroke-linecap="round" fill="none"><path d="M-29-24q7 6 14 0m32 0q7 6 14 0"/></g>
<ellipse cx="-37" cy="-11" rx="12" ry="6" fill="#e9bdaf" opacity=".65"/><ellipse cx="39" cy="-11" rx="12" ry="6" fill="#e9bdaf" opacity=".65"/>
<path d="M-5-13q6-5 12 0l-6 6z" fill="#b18f83"/><path d="M1-7v5m0-1q-7 7-12 0M1-3q7 7 12 0" stroke="#9d8373" stroke-width="1.7" fill="none" stroke-linecap="round"/><ellipse class="yawn" cx="1" cy="5" rx="7" ry="10" fill="#a5887b"/>
</g><path d="M-32 17q-10 26 2 28m60-28q12 26 0 28" fill="none" stroke="#d5c7b3" stroke-width="2.5"/></g>
<path class="sleep-blanket" d="M-48 17q48 15 96 0l4 40q-50 22-104 0z" fill="url(#blanket)" stroke="#9eae89" stroke-width="2"/><g class="carrot"><path d="M-18 17q5-16 18-4l-12 35z" fill="#d8a474" stroke="#bc8d60" stroke-width="2"/><path d="M-9 12q-15-18-5-21l9 14q-3-22 8-18l-5 23" fill="#8eaa7d"/></g><g class="sleep-z" fill="#a59479" font-family="Georgia" font-style="italic"><text x="60" y="-40" font-size="22">z</text><text x="82" y="-66" font-size="29">z</text><text x="112" y="-96" font-size="37">z</text></g></g></g>
<g class="motes" fill="#fff9dd" opacity=".7"><circle cx="399" cy="279" r="3"/><circle cx="192" cy="322" r="2"/><circle cx="610" cy="312" r="3"/><circle cx="572" cy="224" r="2"/></g><path fill="url(#paper)" d="M0 0h1000v670H0z" pointer-events="none"/>
</svg>`;
