---
# slug: soberlink-ui
title: Soberlink UI
company: Soberlink
website: null
description: A small design system built from the ground up to power the future products of Soberilnk.
role: Product Design, Frontend Development
thumbnail: null
hero: /sui-img/sui-hero.png
mockuptype: desktop
mockupimage: /sui-img/sui-cover.png
mockupimagetwo: null
casestudy: yes
order: 1.1
---

Before I dove into my first project at Soberlink, the Identity Management project, I began work on a small design system to help future me manage styles and components across projects. The goal was to start in Figma, and then extend to a front-end component library in Vue powered by Storybook.

Soberlink had no real consumer-facing digital products outside of the barebone apps, so it was time to establish how future products might look and feel going forward. The end-users of our digital products are healthcare providers, lawyers, and clients, so the look and feel of the interface had to look trustworthy and professional. I started with the typography and color palette to complement our branding and marketing style.

<br /><br />
![typography examples](/sui-img/sui-type.png)
<br />

I went with Adelle Sans for its great legibility at smaller sizes and its range of weights. It had just the amount of extra personality in a sans we wanted (although the fantastic Inter was a close runner up as a more neutral option), and it complemented the logotype’s Eurostyle font well.

For the color system, I started with a base color of `#047EB6`, a value close the blue in our logo that has a passing AA Large contrast with white text. This is what would become the `blue-50` of the pallet. I then leveraged Colorbox to help build out the other hues and values for the system. For the colors outside of the grays, I set the `50` levels to be able to have white text over them with AA Large contrast. That way it was easier to pair font colors with background colors without having to measure contrast every time.
<br /><br />
![blue pallet with logo](/sui-img/sui-blue.png)
<br />

For the neutrals, I went with a slightly cooler hue to match our blue accent color. The neutral palette has 1 more shade than the other colors because I often find I need a larger range of grays for background, border, and text colors. The easing of the neutral shades moves much faster through the middle tones, which gives me smaller steps of the lighter and darker ends to work with for subtle contrast between elements. I still think the yellow shades need some love, by far the most difficult color to work with.
<br /><br />
![neutral color scale](/sui-img/palette-neutral.png)
![color pallet](/sui-img/palette-1.png)
<br />

Since I didn’t know what components I was going to need for my first project, I started with some primitive ones. This established some of the styling upfront and gave me a little to build from. The plan after that was to expand upon and add to the component library as needed while designing the products. The almighty button component came first, followed by inputs.
<br /><br />
![button component structure in figma](/sui-img/sui-button-structure.png)
<br />

For the component structure in Figma, I started with a base component that the rest of the variants were built from. For the button, this meant including icons on both sides and a split button section.

Since the first minimal version, I’ve added modals, alerts, and more as needed while building out Soberlink products.

#### The System in Use

<br /><br />
![](/sui-img/sui-in-use-1.png)
<br />
<br /><br />
![](/sui-img/sui-in-use-2.png)
<br />
<br /><br />
![](/sui-img/sui-in-use-4.png)
<br />
<br /><br />
![](/sui-img/sui-in-use-3.png)
<br />

#### Takeaways

If I was going to approach a full color system again, I think I would explore using something like CIE LAB to get more uniform lightness across the palettes. I would also invest more time upfront defining tokens and semantic naming to use in the design system code (and hopefully in Figma someday 🤞). Rather than worrying if updating a color and wondering what components it's applied to, tokens and semantic naming would provide a better map of where colors are used. It would also allow for easier to understand theming for things like dark mode.

As far as things that went well, so far the “just-in-time” building of components as I need them has been working out well. I got a very minimal system going upfront that helped me build the identity management project quicker and with more consistency, and didn’t waste time speculating what components I was going to need in the future.
