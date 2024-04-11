import React, { useState } from 'react';

export const useTopNewsData = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const news = [
        {
            imageUrl: 'https://i.pcmag.com/imagery/articles/00aCmE5Yip9534iq0eh12gz-1.fit_lpad.size_300x169.v1712155643.jpg',
            title: 'New Zero-Day Attacks Target Google Pixel Phones',
            description: `In a rarity, security researchers have discovered hackers exploiting zero-day vulnerabilities to attack Google Pixel phones.

                        Google on Tuesday issued a security advisory about a pair of newly discovered bugs under active attack. “There are indications that the following may be under limited, targeted exploitation,” the advisory says.

                        But it doesn’t look like traditional cybercriminals or cyber spies have abused the vulnerabilities to attack the phones remotely. Google is crediting the zero-days discovery to Daniel Micay, a cybersecurity researcher and founder of GrapheneOS, an Android-based operating system focused on security. According to GrapheneOS, “forensic companies” have been exploiting the two vulnerabilities to retrieve data from Pixel phones.

                        The term forensic companies often refers to vendors that help law enforcement unlock and recover data from confiscated smartphones. In this case, GrapheneOS told PCMag "the vulnerabilities being exploited were reported to us by multiple users, including people who may work in that industry."`,
        },
        {
            imageUrl: 'https://i.pcmag.com/imagery/articles/02r7EKHS8T36Lp9beaqiFxL-1.fit_lim.size_1600x900.v1712086988.jpg',
            title: 'OnePlus Brings AI-Powered Photo Eraser to Its Latest Phones',
            description: `OnePlus is following up on a promise it made earlier this year by rolling out an AI-enhanced upgrade to the current range of OnePlus devices in the days ahead.

                        The company will be adding an image-editing eraser tool to a handful of its most recent phones, including the OnePlus 12, OnePlus 12R, OnePlus 11, OnePlus Open, and OnePlus Nord CE 4. The tool is powered by OnePlus’s proprietary large language model (LLM) and gives users the option of removing unwanted objects from the background of their photos.

                    "We believe that the potential for generative AI on mobile devices is enormous, with the power to completely transform productivity and creativity," says Kinder Liu, president and COO of OnePlus. "As OnePlus' first feature based on generative AI technology, AI Eraser represents the first step in our vision to liberate user creativity through AI and revolutionize the future of photo editing, empowering users to create remarkable photos with just a few touches."

                    If you own one of the OnePlus phones mentioned above, you'll access the AI Eraser tool from the photo gallery. Just click on any individual image and highlight unwanted objects. The AI model will then analyze the selected area and generate a replacement background. This will help you get rid of that annoying tourist who walked behind you in the middle of your shot or a bright toy that somehow made it into the background of your beach shot.

                    OnePlus is not the only company using AI technology to power a photo eraser. Google rolled out Magic Eraser to its Pixel phones last year, while Samsung began offering its Object Eraser tool to select Galaxy phones back in 2021. `,
        },
        {
            imageUrl: 'https://i.pcmag.com/imagery/articles/053ZTDkbzDB4rZTcIykmUxx-1.fit_lim.size_1600x900.v1712498629.jpg',
            title: 'NASA Warns Against Taking Eclipse Photos With Your Smartphone',
            description: `If you’re thinking about trying to capture a quick smartphone picture of the solar eclipse on Monday, you might want to reconsider. While most people know they shouldn’t look directly at the eclipse, as it turns out, our cell phone cameras shouldn’t be looking directly at it either.

                        In a post on X, NASA flagged that “the phone sensor could be damaged just like any other image sensor if it’s pointed directly at the sun.” In other words, you could destroy your phone’s photo sensor while trying to snap that shot. NASA adds that the danger to your phone’s sensor is especially worth noting if you’re using any sort of magnifying lens attachment. If you are, NASA says “you would need to utilize the proper filters just like on any other camera.”

                        All that said, taking a pic with your smartphone isn’t entirely out of the question. NASA says “the best practice would be to hold a pair of eclipse glasses in front of your phone’s lenses when photographing the Sun at any point other than totality.”

                        NASA posted a video as well as a written guide to snapping eclipse photos on its website. We also have a guide to photographing the big event.`,
        },
    ];

    const seeEntireDescription = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return { news, seeEntireDescription, expandedIndex };
};
