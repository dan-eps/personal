function display_text(type){
    let text;
    if(type=="majorana_one.txt"){
        text = majorana_one();
    }
    if(type=="cci_engineering_merger.txt"){
        text = cci_engineering_merger();
    }
    if(type=="crowdstrike_oops.txt"){
        text = crowdstrike_oops();
    }
    if(type=="drexel_cybersecurity.txt"){
        text = drexel_cybersecurity();
    }
    if(type=="tech_communication.txt"){
        text = tech_communication();
    }
    if(type=="accessibility.txt"){
        text = accessibility();
    }
    document.getElementById("file-text").innerHTML = text;
    document.getElementById("notepad-title").innerHTML = type;
}

function majorana_one(){
    return `<p>After almost 20 years of research, Microsoft unveiled the Majorana 1, their new quantum computing chip. 
    In order to create this revolutionary new processor, Microsoft claims they needed to invent an entirely new state of matter.</p>
    
    <p>Their new Topological Core, parts of which were designed atom by atom, can allegedly create and observe Majorana zero modes, a 
    type of subatomic particle that was previously only theoretical. Rather than a typical superconductor that conducts electricity when 
    cooled, the quantum processing unit leverages a topological conductor — which conducts electricity only at its edges — to create 
    and observe these particles.</p>
    
    <p>According to Microsoft, “the topoconductor, or topological superconductor, is a special category of material that can create an 
    entirely new state of matter - not a solid, liquid or gas but a topological state.”</p>
    
    <p>To understand exactly what Microsoft is boasting, it is important to understand how most computers work today. Imagine flipping a coin. 
    The spinning coin can either land on heads or tails. That is how traditional central processing units are built. They are made up of tiny 
    little bits that can either be a one or a zero, representing on or off. </p>
    
    <p>This means to store just a single two-digit number, you might need five whole bits. The larger the number, the more bits required. 
    This makes complex calculations potentially take centuries for the computer to finish solving.</p>
    
    <p>However, quantum mechanics has a strange principle called superposition. According to superposition, the spinning coin is both heads 
    and tails before it is observed. Quantum computers leverage this property, instead relying on aptly named quantum bits. These qubits can 
    behave like two different objects simultaneously, meaning they hold a combination of both one and zero at the same time.</p>
    
    <p>The more qubits that are paired together, the more powerful the quantum computer. Unfortunately, more qubits also typically means more 
    errors due to their unique nature. Last December, Google released their Willow chip which was able to solve this problem using very complex 
    math, and could actually exponentially reduce errors as the number of qubits increased. </p>
    
    <p>Microsoft's chip, despite fitting in the palm of your hand, “offers a clear path to fit a million qubits.” At the moment, though, they 
    have only placed eight of these qubits on the Majorana 1.</p>
    
    <p>While this does seem to be a major breakthrough, some believe it is too good to be true. Microsoft's paper, published in Nature, only 
    shows intermediary results, and does not actually prove that they have invented a true topological superconductor.</p> 
    
    <p>At best, the Majorana 1 is the first step toward seeing practical quantum computer usage in the next decade, and at worst is nothing more 
    than an exaggeration of progress meant to improve stock price. Either way, the buzz created by Microsoft's announcement is keeping quantum 
    computing in the forefront of the technology world.</p>
    
    <p>Quantum computing is not a new idea. Back in the 1980s, famous physicists Richard Feynman and David Duetsch theorized that a quantum computer 
    could be leveraged to easily solve a lot of the complex problems that would take classical computers billions of years to solve, if they could 
    solve them all.</p>
    
    <p>For example, think of your favorite 300-digit number. Could you list all of its factors? Do you think your computer could? If you had a couple 
    hundred thousand years to wait, it could do it. But if you had a quantum computer capable of executing the theory, you could know all the factors 
    in about a second. This might not seem that cool, but prime number factorization has a huge role in cybersecurity and encryption, meaning we 
    can make things a whole lot more secure. </p>
    
    <p> Quantum computers could also provide wonderful insights in biology and chemistry by accurately calculating behavior for enzymes, surface 
    materials and pollutants, leading to breakthroughs in healthcare, agriculture, environmental science, material science and many other fields.</p>
    
    <p> To this day, the limiting factor has been only the physical capabilities of our hardware. While Microsoft's release of the Majorana 1 might 
    be embellished with a lot of smoke and mirrors, it certainly is an important stepping stone to seeing real results much sooner than we think.</p>`
}

function cci_engineering_merger(){
    return `<p>Drexel University has recently announced that the College of Computing and Informatics and the College of 
    Engineering will merge to form the College of Computing and Engineering as part of their upcoming academic changes. 
    According to an email from the university, these restructuring changes will “bolster curricula, research, and the student 
    experience,” providing better opportunities and degree flexibility. However, as these changes are part of Drexel's plan to 
    recover financially from declining enrollment, there are growing concerns the “more streamlined organizational structure” 
    and “greater integration of resources” are a cover for Drexel to fire staff and overwork remaining employees.</p>
    
    <p>Between the 10 majors in CoE and the six majors in CCI, there is currently a lot of curriculum overlap. As a computer 
    science major, many of my classes have prerequisites that can be satisfied by taking classes in the engineering college. 
    Often there are entire courses that are essentially the exact same between the two schools, giving students the option 
    for which version they'd like to take.</p>
    
    <p>Combining the colleges would save a lot of redundancy, but it would still present challenges. Scheduling is already 
    a difficult process within CCI due to the large number of students. Likely when the redundancies are resolved, more 
    sections will not be added to accommodate the influx of students causing scheduling to become more difficult for 
    computing and engineering students alike.</p>
    
    <p>Unfortunately, with the removal of redundant classes almost certainly comes with the removal of faculty and staff. 
    While these plans will take place after this academic year, there are still so many unknowns about what the future 
    of even the student staff of these colleges will look like. Both colleges employ students as peer mentors, course 
    assistants and other student leadership positions, but have different policies for doing so. </p>
    
    <p>CoE does not allow undergraduate students to be course assistants, such a policy is not truly feasible for CCI due 
    to the number of undergraduate students in comparison to the graduate student population. In this new college, would 
    undergrads be barred from being course assistants? Or would they now be responsible for being course assistants to a 
    much larger pool of students? What about peer mentors? CCI's peer mentors are already overworked, and responsible for 
    teaching a large number of students the ins and outs of the college.</p>
    
    <p>With the new combined college, they will have to deal with more students and present a lot more information. How 
    effective can a peer mentor be if they are also learning how the new college operates alongside the new freshman they 
    are supposed to be mentoring? Combining the colleges will put strain on all faculty and staff from both entities, 
    Drexel should not make it worse by reducing the staff as well.</p>
    
    <p>Many universities already house computer science, software engineering and related majors in their engineering college. 
    I am majoring in computer science but pursuing a minor in electrical engineering, and there is a lot of overlap between the 
    required courses for each. But having CCI as a separate college reinforces a key aspect of computer science especially: 
    CS is not engineering. CS is not all about programming, it is much more about math and theory. If CCI were to fully dissolve, 
    the computer science major would fit much better in the College of Arts and Sciences alongside Math and Physics. With the 
    uncertainty that lies ahead in the wake of these changes, it is critical that Drexel uphold their commitment and provide 
    better opportunities, both in quantity and quality, for its students and staff alike.</p>`
}

function crowdstrike_oops(){
    return `<p>Last week on Friday, July 19, thousands of fliers across the United States fought their way through TSA security 
    only to arrive at their gates to find flights delayed and canceled. In restaurants, mobile ordering options failed, and 
    millions of PC users opened their computers to find nothing but a blue screen.</p>
    
    <p>So, what happened? CrowdStrike, a cloud-based computer security firm, pushed a “Rapid Response Content” update with an 
    uncaught bug that caused 8.5 million machines running Windows to crash, colloquially known as the “Blue Screen of Death.” 
    This widespread outage devastated a myriad of companies and organizations, including major airlines, banks and even 911 call 
    centers.</p> 
    
    <p>Unlike most software bugs, this was not the result of a code change. CrowdStrike's Rapid Response Content are actually 
    “template instances,” essentially a configuration for their security software, the Falcon platform. The platform then does 
    its own internal validation and uses these templates as a pattern to detect or prevent. Unfortunately, one of the template 
    instances CrowdStrike pushed on Friday morning had problematic data but still passed Falcon's internal validation due to 
    a pre-existing bug.</p>
    
    <p>Usually, when large companies find errors in recently updated code, they perform a rollback, where they revert their 
    codebase to the last stable version. However, the unique nature of this error meant that the affected machines were unable 
    to even startup, much less receive a code fix from CrowdStrike. Every single affected machine had to be repaired and 
    rebooted manually.</p>
    
    <p>This devastating error is a direct result of CrowdStrike breaking a cardinal rule of software development: do not 
    deploy on Fridays. While it may seem silly, this rule is essential for IT professionals keeping a work-life balance and 
    not working long weekends to fix a silly mistake. Bugs and errors are unavoidable when writing code but are easy to 
    mitigate with a well-structured workflow. CrowdStrike's global outage has highlighted the importance of hiring teams of 
    trained quality assurance professionals. Since the COVID-19 pandemic, many companies have been downsizing their IT and QA 
    teams, but the need for human involvement is still as prevalent as ever. </p>
    
    <p> Another major takeaway that many individuals and companies have realized from this outage is that the modern technical 
    age is not as redundant and decentralized as some might like to think. With data centers all over the world and “cloud” 
    computing being the norm, mass outages like this one have become less common. But while the number of total servers and 
    data centers might have gone up, the number of cloud provider options has only gone down. </p>
    
    <p> When looking at cloud computing options, the only names in town are Amazon Web Services, Microsoft Azure, Google Cloud 
    and the occasional smaller provider. The fewer companies that offer cloud services, or applications to run on them, like 
    CrowdStrike, the more centralized our modern infrastructure becomes. A Microsoft specific outage turns into a worldwide disaster, 
    since each company has such a massive slice of the market. In the age before cloud computing, each company and individual 
    looking to build back end or even front end infrastructure for a website or application would have their own servers, and 
    self hosting was the norm. </p>
    
    <p> If one company had a security failure, software bug, crash, the damage would be limited to just one organization, not a 
    massive organization. Centralization of cloud computing, layoffs in QA and field technicians will only continue to make the 
    modern world less reliable. </p>`
}

function drexel_cybersecurity(){
    return `<p>Cybersecurity Guide's new rankings place Drexel University's online bachelor's in computing and security technology second in 
    online cybersecurity degrees for 2024.</p>
    
    <p>Cybersecurity Guide is an online resource run by renowned cybersecurity professionals in the industry and academia. Their rankings of 
    top cybersecurity programs are based on a number of factors, such as graduation rates, tuition costs, admission rates and student-faculty 
    ratio. Drexel's program, which boasts useful hands-on experience and core concepts reinforced through practical work experience, 
    placed second among 58 schools with online cybersecurity degree programs. However, just two years ago, Drexel barely made it onto 
    Cybersecurity Guide's Top 25 rankings at all. </p>
    
    <p> Chris Lenihan, head of marketing at Cybersecurity Guide, offered some insight as to why Drexel has shot up through the rankings in 
    the past two years: </p>
    
    <p> “Drexel's Cybersecurity program is ranked #2, which is outstanding. The factors that most contributed to this year's rankings were 
    strong graduation rates and a favorable student-faculty ratio.” Lenihan said. </p>
    
    <p> Lenihan also added that Drexel's designation as a “National Center for Academic Excellence in Cybersecurity” by the Department of 
    Homeland Security and the National Security Administration, an award Drexel has held for about 20 years, significantly increases 
    Drexel's ranking when compared to other schools. </p>
    
    <p> Lenihan emphasized that Drexel's improved ranking is primarily due to its focus on positive student outcomes. High graduation rates 
    combined with a priority of real-world experience set Drexel apart from other schools around the country. Cybersecurity students at 
    Drexel are equipped with a diverse skill set, incorporating areas like network security, cryptography, ethical hacking and incident response. </p> 
    
    <p> Drexel's online program now works in tandem with their in-person program, giving all students access to the same hands-on resources, 
    including labs, servers and virtual environments. The labs prepare all students with the foundational knowledge necessary for cybersecurity 
    and system administration. </p>
    
    <p> Jordan Prince, a third year computing and security technology major, pursued a networking certification because of his networking 
    administration classes that he took during his freshman year. </p>
    
    <p> Prince recalled one assignment he particularly enjoyed where he got first-hand experience “configuring switches and routers and 
    setting up an entire network.” </p>
    
    <p> Armed with the hands-on knowledge from his classes and co-op experiences, he was able to land an information security internship 
    at the Philadelphia International Airport. Jordan recommended that students pursue cybersecurity for the vast technical knowledge and 
    the high salary that comes along with that. </p>
    
    <p> Both Prince and the Bachelor's CST Program Director Chris Carroll stated that “anyone can and should learn cybersecurity.”</p>
    
    <p> Everyone has data to protect — even a basic understanding of cybersecurity can benefit any career. Carroll specifically called out 
    business majors and biology majors, saying that “new work in biology is very computer-centric, they need to store and analyze that data. 
    They need to understand how IT works.” </p> 
    
    <p> As more and more jobs become increasingly reliant on big data, understanding information technology becomes crucial. </p>
    
    <p> “If you're in another field, cybersecurity is really not a bad minor to take,” says Carroll. “Computers run the world now so 
    if you understand the way computers work, it really helps you.” </p>`
}

function tech_communication(){
    return `<p>I sat down with Ruben Reyes, owner of Lyquix, to talk about tips and tricks to keep in mind when communicating technical problems or 
    solutions to clients and employees. Ruben started Lyquix in early 2008 after coming to America from Venezuela. Immediately after founding 
    the company, the world economy collapsed. Nevertheless, Ruben persisted with the company and it took off, becoming a well-trusted company 
    in Philadelphia and other parts of the United States. After over fifteen years of experience, Ruben was eager to share some of the lessons 
    that he's learned about technical communication that keep his business at the forefront of the web development world.</p>
    
    <p>The focus of the interview was to learn how to better approach technical communication with a client or a co-worker, and how to handle 
    different levels of technical experience. Ruben provided many of the methods he's honed over the years to help those who are looking to 
    improve their own technical communication skills.</p>

    <p>When talking to a new person or group about something technical, many people get too caught up in the fact that they don't know everyone's 
    technical experience. How specific can they get? How much do they need to “dumb down” their explanation so that their point is understood? 
    However, what many people don't realize is that they can just ask. While it's often true that people may just tell you what the extent of 
    their technical knowhow is, asking “How familiar are you with xyz?” is a perfectly reasonable question.</p>
    
    <p>For some, their level of expertise will become apparent from either their position or their words. For example, it's safe to assume that the 
    “Head of Software Development” of a company would be pretty familiar with technical terms, whereas a “Marketing Assistant” probably wouldn't 
    be. However, the most helpful way to gauge someone's technical experience without asking is to listen to their reactions and responses. Often, 
    it's very easy to tell if someone doesn't understand what you are saying from their reactions. Or they might say something that you know is 
    factually incorrect, so you have to backtrack and reword what you had said previously. Still, you can just ask if they understood your previous 
    point or ask, “Did that make sense?”. </p>
    
    <p>Regardless of their level of technical experience, remember to always leave out specifics. Being too specific, like using the names of coding 
    languages or softwares, can just muddle your point and confuse your audience. Even those with extensive technical knowledge won't gain much from 
    hearing specifics. As a general rule of thumb, abstract your ideas as much as you can without muddling your point. The more abstract the idea, 
    the more your listeners will be able to apply what they've learned in the future. When talking with anyone, make sure to keep your main takeaway 
    in mind as you speak. Your main point should guide your speech so you make sure that, above all else, is not lost on your listeners. </p>
    
    <p>Another important consideration is that technical knowledge is a gradient, and there is no one-size-fits-all approach to technical communication. 
    Even when speaking to a large audience, the same words will affect each person differently, as everyone learns differently. The best thing you can 
    do to combat this is to anticipate common pitfalls and questions. When conveying a technical solution, don't just give them the answer, but lead 
    them in a way that doesn't facilitate mistakes that you know are common or probable. However, you don't want to baby whoever you may be speaking 
    to. Your job is to inform them of common pitfalls and ultimately let them make their own path. </p>

    <p>When speaking to clients especially, the most important technique is honesty. Building trust is extremely important to both growing your business 
    and building relationships with others. It is critical that you make sure that whoever is listening to you trusts that you know what you are talking 
    about and that you are going to do exactly what you say you're going to do. In other words, don't be a mechanic. If you don't know something, just 
    say “I don't know”, rather than make something up. Only speak on the topics you know you can speak on, and leave the rest out. Don't promise something 
    you can't deliver, and remember that you want whoever is listening to you to listen to you again in the future. </p>

    <p>Following this interview, I will be spending the rest of my time at Lyquix learning from Ruben's example. As I watch him communicate with our 
    development team and with clients, I will take the techniques he uses to communicate technical problems and solutions into my own life. Everyone can 
    always learn something new about technical communication, and a great place to start would be to look up to someone like Ruben.</p>

`
}

function accessibility(){
    return `<p>As someone who both uses the web every day and creates websites for a living, It's very difficult to imagine how someone 
    living with a disability interacts with the same systems in a much different way. The way we use these technologies has become so 
    ingrained in our brains that we forget that these technologies are much more difficult for people to use if they have any sort of 
    visual, auditory, or mental impairment. Here are my recommendations for making web applications more accessible for all people.
	Websites are primarily built using a markup language called HTML. A sample HTML tag may look something like this:</p>
    
    <p><code>&lt;div class="page-text"&gt; Text Goes Here &lt;/div&gt;</code></p>

	<p>This HTML makes up a web page, with each tag corresponding to a different element. Depending on what the element is, there are certain 
    attributes, like class, that can be added to the HTML structure to make the experience of users with disabilities much better. It's important 
    to note that any of these recommendations will only improve the experience for all users, and will primarily not even affect users 
    who are not disabled.</p>
    
    <p>Most people could never fathom living without being able to see. But for many, lack of sight is nothing more than a reality they have to 
    live with. However, navigating a website is not impossible without being able to see. Most people with visual impairments use a screen reader 
    to navigate websites that will read out a website's code in a way that makes sense to the average user. While there are some best practices 
    to make sure a screen reader can read your site well, screen readers work with basic HTML by default.</p>

	<p>The bottom line is, choosing your tag carefully is crucial to ensuring your site is accessible. You could create a website using only <code>&lt;div&gt;</code> 
    tags, and your site would work perfectly fine for anyone that can see. Anyone using a screen reader, however, would instantly get completely lost 
    on your site. Instead, use tags that are descriptive of the elements that they contain. </p>
    
    <p> For example, use <code>&lt;nav&gt;</code> tags for your navigation, <code>&lt;button&gt;</code> tags for buttons, <code>&lt;h#&gt;</code> tags for headings, etc. By using descriptive tags, the screen 
    reader can accurately tell a blind user exactly where they are on a page. It is especially important to use <code>&lt;button&gt;</code> tags for clickable elements 
    that aren't links, so that any user with a screen reader knows that they can interact with that element. </p>
    
    <p> Another useful tip for writing code that helps blind people navigate your site is to write a unique title for each page. The <code>&lt;title&gt;</code> tag is what 
    controls the text in the top of the tab. While many developers tend to write a generic title for the entire site, this can make it extremely hard for 
    blind people to distinguish which page they are on, which in turn makes it very difficult for them to navigate the site. </p>

    <p> It's important that any links on your site don't just say “Read More”, or “Click Here”, because a screen reader will skip all of your links if their 
    content is essentially worthless without context. Another thing that people who can see don't consider from a blind person's perspective is imagery. Its 
    important to make sure that all of your images utilize the alt attribute, which displays text when the image isn't rendered correctly. The alt attribute 
    is also what screen readers use to convey the images to blind users. </p>
    
    <p> Contrary to what you might expect, the screen reader doesn't just read all the text on the page. Similar to the alt attribute for images, other tags 
    can use the role and aria-label attributes to tell the screen reader what the tag is and what it's used for. These attributes greatly improve the navigational 
    experience for blind users. Other important considerations for visually impaired users include reducing captcha usage, using rem units for font-sizes, and 
    making sure your web pages are easily navigated using the keyboard instead of a mouse. </p>

    <p> Many people don't realize that deaf people have trouble navigating websites, because web interaction normally only involves the sense of sight and the sense 
    of touch. However, many people fail to consider that reading levels between deaf people vary drastically, as it's much harder to learn how to read without being 
    able to hear. As a result, it's crucial to make sure web pages are easy to read. Even the average user doesn't want to read a website that's written like a 
    dissertation. When using videos, it's important to make sure they have closed captions or an associated video transcript. Even people who can hear often prefer 
    to turn on captions to help them follow along with a video. </p>
	
	<p>When talking about accessibility, it's very easy to forget that some people can see and hear but still don't interact with the world in the same way as everyone else. 
    For people who are color blind, viewing a website can be extremely difficult depending on the site's styles. There are several different types of color blindness; 
    red-green, blue-yellow, and complete color blindness to name a few. To help people that are color blind, don't use two colors together that are easily confused by 
    colorblind users. If you must, use large amounts of both colors so they are more easily distinguishable. </p>
	
    <p> Don't use two colors together that have similar hues or temperatures together. High contrast is very important when choosing colors. However, the biggest takeaway 
    when choosing color is to not let your key messages be reliant on color. Use different words, bold text, and use images to get key points across. </p>

	<p> When creating a website, make sure it works well across all browsers and all devices. It's critical that your site is accessible and easy to use from any device. 
    The best way to make sure your code is accessible is to use people with disabilities in testing your projects. They will make it very apparent what works for them and 
    what doesn't. These tips will make the world wine web a better, more accessible place for all users. </p>
`
}