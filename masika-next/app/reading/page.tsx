'use client';

import React, { useEffect, useState, useRef, Suspense } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './Reading.module.css';

const storyData: Record<string, { title: string, text: string, author: string }> = {
    "1": { title: "A Very British Period Story", text: "The day Queen Elizabeth II passed away, my partner and I were watching the news together. It was one of those moments that felt historic, and the coverage was on every channel. Around the same time, I was on my period and suddenly got hit with some of the worst cramps I'd experienced in months.<br><br>I quietly went into the bedroom, curled up under a blanket, and started crying from the pain. A few minutes later, my partner came in looking genuinely concerned. He wrapped his arms around me, gave me a cuddle, and started saying things like, “She lived a long life,” and “She’s probably at peace now.”<br><br>I was completely confused.<br><br>After a few awkward moments, we both realized what had happened. He thought I was crying because the Queen had died. In reality, I was crying because my uterus had decided to declare war on me.<br><br>Once he figured it out, he immediately switched into support mode. He got me a hot water bottle, drove me to the store, and let me point out the exact pain relief, sanitary products, and comfort snacks I needed because he didn't want to accidentally buy the wrong thing.<br><br>It started as a funny misunderstanding, but I still remember how caring he was once he understood what was really going on.", author: "Ananya, Odisha" },
    "2": { title: "My Story, My Choice, My Power", text: "I actually had a positive introduction to periods through school. We attended educational classes and received starter kits with information and supplies.<br><br>The difficult part came later.<br><br>When I finally got my period, I asked my mother not to tell my stepfather. She ignored that request, and something about that moment changed our relationship. I stopped sharing personal things with her after that.<br><br>Years later, I struggled with body image and complicated feelings around menstruation. For a long time I used methods that allowed me to avoid dealing with my cycle altogether.<br><br>Eventually, I began learning more about fertility, menstrual health, and my own body.<br><br>That knowledge changed everything.<br><br>I realized that understanding my cycle wasn't something to fear—it was something that could empower me.<br><br>The journey wasn't easy, but it helped me reclaim ownership of my own story.", author: "Ritu, Bihar" },
    "3": { title: "Not Perfect, But It Was My Start", text: "My mom explained periods to me before they happened.<br><br>She told me about blood, pads, and growing up. When I eventually got my first period, I called her from the bathroom and she calmly brought me clean underwear and a pad.<br><br>What she didn't tell me about were the other symptoms.<br><br>The cramps. The mood changes. The exhaustion.<br><br>When those arrived, I was terrified.<br><br>Each time something new happened, she would explain that it was connected to my period. Looking back, she was doing her best with the information and cultural attitudes she had grown up with.<br><br>The one thing I wish I'd heard more often was that menstruation wasn't something to be ashamed of.<br><br>Still, despite the gaps in the conversation, she gave me a starting point—and sometimes that's where confidence begins.", author: "Meera, Rajasthan" },
    "4": { title: "Prepared, Supported, Always", text: "Starting when I was about ten years old, my mom kept two pads tucked inside the small zippered pocket of my backpack.<br><br>One day she sat down with me and explained how to use them. It wasn't a dramatic conversation or a scary lecture.<br><br>She simply said:<br><br>\"You never know when you'll need one. Or when a friend might.\"<br><br>She explained that the school nurse would usually have supplies, but having your own was often more comfortable and convenient.<br><br>What I loved most was how matter-of-fact she was. She treated periods like a normal part of life.<br><br>There was no fear. No shame.<br><br>Just preparation, confidence, and the understanding that women help each other because they've all been there too.", author: "Priya, Kerala" },
    "5": { title: "Weed, Warmth & Period Relief", text: "When I was a teenager, I wasn't very experienced at dealing with the severe cramps that came with my periods. Every month felt overwhelming, and I had very few coping strategies.<br><br>One summer, a friend from California came to visit. She was the kind of person who could make anyone laugh, and she happened to be a bit of a pothead at the time.<br><br>One evening I was lying in bed, miserable and crying because of period pain. Seeing how bad I felt, she packed a bowl and convinced me to give it a try. I had never tried anything like that before and was honestly nervous.<br><br>I'm not recommending it to anyone, but what I remember most was the feeling of relief. The pain that had been consuming my attention seemed to fade almost immediately. More importantly, I stopped feeling trapped inside the discomfort.<br><br>The thing that stayed with me, though, wasn't the pain relief itself. It was how caring my friend was. She stayed with me, made sure I felt safe, kept me laughing, and turned what could have been a terrible day into a memory I still smile about years later.", author: "Simran, Punjab" },
    "6": { title: "From My Pain to Their Power", text: "I experienced precocious puberty and began menstruating much earlier than most of my peers.<br><br>The experience was incredibly difficult.<br><br>I felt isolated, confused, and unprepared for what was happening. It remains one of the hardest periods of my life, and I wouldn't wish that experience on anyone.<br><br>But over time, something changed.<br><br>Instead of letting that experience define me negatively, I chose to use it as motivation.<br><br>Today, I work as a puberty educator.<br><br>Every conversation I have with young people is an opportunity to provide the support, information, and reassurance that I wish I had received.<br><br>If I can help even one child feel informed instead of afraid, then my difficult beginning has been transformed into something meaningful.<br><br>My story started with pain.<br><br>But now, it helps create power for others. ❤️", author: "Kavita, Maharashtra" },
    "7": { title: "Kindness Made My First Period Better", text: "I got my first period when I was ten years old while visiting my dad. That meant the person helping me wasn't my mom—it was my stepmom.<br><br>At the time, we weren't especially close, and I was scared and overwhelmed. I didn't know what was happening and immediately started crying.<br><br>My stepmom sat beside me and calmly explained everything. She showed me how to use a tampon and reassured me that nothing about what was happening was strange or shameful.<br><br>Then she said something I've never forgotten:<br><br>\"Half the people in the world experience this. Every month. This is nothing to be scared of and nothing to be ashamed of.\"<br><br>Those words completely changed how I saw menstruation.<br><br>Instead of feeling embarrassed, I felt connected. Instead of feeling broken, I felt normal.<br><br>More than thirty years later, I still remember that conversation.", author: "Lakshmi, Tamil Nadu" },
    "8": { title: "Thanks, Dad. You Got It Right.", text: "My mom passed away before I ever got my first period.<br><br>Naturally, that meant my dad had to step into a role he probably never expected.<br><br>To his credit, he handled it beautifully.<br><br>He made sure there were supplies available, learned about different products, and explained things as best as he could. He wasn't perfect, but he never pretended periods were embarrassing or something to hide.<br><br>What he got right was the atmosphere.<br><br>He made sure I felt safe asking questions. He never made me feel awkward. He always kept supplies stocked and reminded me that everyone's experience is different.<br><br>Looking back, I don't remember whether every explanation was technically correct.<br><br>I remember feeling supported.<br><br>And that's what mattered most.", author: "Aisha, Karnataka" },
    "9": { title: "He's Where the Bar Is", text: "For years, I rarely had period problems because, as it turned out, I wasn't really having regular periods at all. Later I was diagnosed with PCOS.<br><br>The first truly painful period I experienced came after a failed fertility treatment. The physical pain was intense, but the emotional pain was even worse. I was grieving the fact that I wasn't pregnant while also dealing with cramps so severe I could barely stand.<br><br>My husband immediately took a day off work.<br><br>Before the pain became unbearable, he took me to a petting zoo because he knew being around animals would lift my spirits. Later, he ran me a warm bath and, while I was soaking, rushed out to buy chocolate and a cute card.<br><br>What makes this story special isn't that single day.<br><br>It's that this is who he is all the time.<br><br>Years later, as exhausted parents navigating sleep regressions and chaos, he's still the first person to offer help. He's still the person who says, \"Go rest. I've got this.\"<br><br>People often talk about how low the bar is. My husband is where the bar should be.", author: "Sneha, Gujarat" },
    "10": { title: "Always Known, Always Supported", text: "As far back as I can remember, periods were simply part of life.<br><br>There was never a big reveal or awkward conversation. My parents talked about them openly, and because of that, I never grew up feeling embarrassed.<br><br>My mom struggled with painful, heavy periods, and my dad was incredibly supportive. When I started having similar issues, both of them stepped in without hesitation.<br><br>If I bled through clothes at school, Dad would bring replacements. If I needed medication, he picked it up. If I needed a doctor's appointment, they both showed up.<br><br>Now I have four daughters of my own.<br><br>I've tried to raise them with the same openness. Periods are discussed honestly, factually, and without shame.<br><br>The only thing they've found truly shocking was the day my husband accidentally bought giant overnight pads and they couldn't stop laughing at how enormous they were.<br><br>And honestly? That's exactly how it should be.", author: "Divya, Assam" }
};

function StoryModal() {
    const [isActive, setIsActive] = useState(false);
    const [progress, setProgress] = useState(0);
    const router = useRouter();
    const searchParams = useSearchParams();
    const modalRef = useRef<HTMLDivElement>(null);
    
    const storyId = searchParams.get('id') || "1";
    const currentStory = storyData[storyId] || {
        title: "Story not found",
        text: "The requested story could not be loaded.",
        author: "System"
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(true);
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        const scrollTop = target.scrollTop;
        const scrollHeight = target.scrollHeight - target.clientHeight;
        const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        setProgress(scrollPercent);
    };

    const handleClose = () => {
        setIsActive(false);
        setTimeout(() => {
            router.push('/#stories');
        }, 800);
    };

    return (
        <div 
            className={`${styles.storyModal} ${isActive ? styles.active : ''}`} 
            ref={modalRef} 
            onScroll={handleScroll}
        >
            <div className={styles.smProgressBar} style={{ width: `${progress}%` }}></div>
            <div className={styles.smBgGrid}></div>
            
            <div className={styles.smAmbientGlow}></div>
            <div className={styles.smWatermarkText}>TELEMETRY</div>
            <div className={styles.smGiantQuote}>“</div>

            <div className={styles.smTopBlur}></div>
            <div className={`${styles.smHudLine} ${styles.smHudLeft}`}></div>
            <div className={`${styles.smHudLine} ${styles.smHudRight}`}></div>

            <div className={styles.smClose} onClick={handleClose}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </div>
            
            <div className={styles.smContent}>
                <div className={styles.smHeaderMeta}>
                    <span className={styles.smTag}>
                        <span className={styles.pulseDot}></span> Telemetry Log
                    </span>
                    <span className={styles.smReadingTime}>03 MIN READ</span>
                </div>
                
                <div className={styles.smReadcoverWrapper}>
                    <Image src="/readcover.jpg" alt="Read Cover" className={styles.smReadcoverImg} width={1280} height={532} />
                </div>

                <h2 className={styles.smTitle}>{currentStory.title}</h2>
                
                <div className={styles.smDivider}>
                    <div className={styles.smDividerGlow}></div>
                </div>
                
                <div className={styles.smText} dangerouslySetInnerHTML={{ __html: currentStory.text }} />
                
                <div className={styles.smAuthorBlock}>
                    <span className={styles.smAuthorLabel}>STORY BY</span>
                    <div className={styles.smAuthor}>{currentStory.author}</div>
                </div>
            </div>
        </div>
    );
}

export default function Reading() {
    return (
        <Suspense fallback={<div style={{background: '#fff', width: '100vw', height: '100vh'}}></div>}>
            <StoryModal />
        </Suspense>
    );
}
