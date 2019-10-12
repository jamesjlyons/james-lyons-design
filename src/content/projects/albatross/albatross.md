---
slug: grandpad-checkout
title: GrandPad Checkout
company: GrandPad
website: ./project/grandpad-checkout
description: Redesigning the buy flow
role: UX Research, UX Design, UI Design, Frontend Development
thumbnail: ./images/albatross-thumbnail.svg
hero: ./images/albatross-hero@2x.png
order: 3
---

#### The Problem

99.8% of users bounced when arriving at the first page of GrandPad's buy flow, whether coming from a point in the sales funnel or landing directly on the page. Mobile devices were starting to account for a large percentage of our visitors, and none of the buy flow was optimized well for mobile. To add some spice to this project, GrandPad had recently started working with a marketing firm, and their biggest marketing campaign was scheduled to launch in a little over a month. Somewhat of a crunchy timeline.


#### The Goal of the Redesign

The main goal of this redesign was to improve the bounce rate on the first page and retain users through the flow. After evaluating the current iteration of the checkout flow and doing some research, I decided to focus on these points to achieve that goal:

1. **Minimize the amount of data collection needed.** 
   This would cut back on the number of steps a user would have to take and make the process feel more manageable.
    - Group data collection in a logical order so we could reuse data that had already been submitted
2. **Provide users with an indicator of their progress** through the checkout process.
3.  **Make users feel secure in making their purchase.** The checkout process was basically vanilla-bootstrap-styled, which made users feel like they had left the GrandPad website. We wanted a more seamless experience that instilled some trust in users who were about to make a large purchase.

#### Constraints:

- Time (marketing campaign)
- Resources (Me + 1 developer)
- Couldn't rely on 3rd party checkouts (PayPal, Amazon, etc) because of our shipping process.
- In order to deliver a GrandPad, we had to collect info on multiple people.

#### Research

To help with research, we set up a test environment of our current buy flow. We leveraged [`usertesting.com`](http://usertesting.com) to get some feedback from people in our target audience: adults with senior parents. We had the participants read through the home and product description pages of our website so they would have a better idea of what they were testing the checkout process for.

The most common complaint was that the process from start to finish just took too long. To sell and setup a GrandPad, we needed information about 3 people (which clould all be the same or different): The purchaser, the Family Admin of the GrandPad account, and the GrandPad tablet user. Names, addresses, emails, gender, and birthdays were beeing collected for all of them. ---split?----That raised the question, do we really need all of this information for each individual? From a product perspective, names and emails were clearly a necceisity, and birthdays were a nice-to-have for product features like birthday reminders. I figured we could drop gender because it was pretty useless for us to know. After talking with engineering, I found out that the database was setup to where it needed a gender input. /////The most progess I could make here was adding an "Other" option to the gender selection for those who didn't want to disclose or didn't identify with the binary options we had.///// 



Since I couldn't cut back on the data needed, the next solution I explored was allowing the user to reuse data that had already been submitted. It was common that the purchaser of the GrandPad would also be the Family Admin, and in rare cases the GrandPad user would be purchasing it themselves.



In the case that a user could not re-use data for any of the checkout, I still wanted a way to make the process feel quicker. It also didn't help that the progress bar at the top of the screen was a solid green bar that incremented at seemingly random levels each step along the way, with no indicator on how much many steps were left to complete.----**MOAR**----

tested progress bar and navigation patterns----**MOAR**----

----**MOAR**----



##### Testing
The first flow I prototyped and tested collected only the name and email on the first step, so that enough information was grabbed for marketing to work their retargeting and abandon cart magic.

I explored the idea of integrating with third-party checkouts like Paypal or Amazon to save the user some time on inputting their payment details. After we had already tested the flows, we realized our shipping process wouldn't work with these types of services. So although the option is in the wireframes, it didn't make it to the final UI.


##### Flow v1
![case study flow v1](./images/case-study-flow-v1.png)

The next iteration of the flow I tested grouped name, email, and payment information on the first page. Since a majority of the users were coming from the product info page of the website, they had already clicked on which plan they were interested in buying. This helped cut one more page out of the process and 
##### Flow v2
![case study flow v1](./images/case-study-flow-v2.png)

I created a prototype to be tested on mobile phones, since the amount of data the user had to input was going to feel like more on a small screen. I used one of the more popular small device sizes, 320x568, to do a quick test on how much scrolling would be needed on each page of the flow to get through the checkout.

###### Scrollable prototype with clickable buttons at the bottom of each screen
<iframe src="https://albatross-wireframe-screenonly.jamesjlyons.now.sh" width="320" height="568" frameborder="0"></iframe>


#### High Fidelity Mockups and Interactions
Now that we had a direction to move in with the flow of the checkout, it was time to put the polish on the mockups. 


#### Results
We launched in time, and the redesign was well-recieved by our team, customer experience, and the marketing firm.
But sadly, the new site didn't stay up long enough to get significant data for comparison to the metrics from the previoud version. Shortly after we launched the redesign, we partnered with Consumer Cellular, who was going to handle all sales through their website.