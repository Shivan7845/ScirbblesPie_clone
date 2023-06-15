gsap.from(".nav-part2 h4" ,{
    y:-100,
    opacity : 0,
    duration :1
}) 

gsap.from(".nav-part1 i",{
    y: -100,
    opacity:0,
    stagger : 0.4,
    duration : 1,
    delay:0.5,
})
gsap.from(".nav-part3 button" , {
    x :300,
    opacity:0,
    delay :1,
    duration:1,
})

gsap.from(".p1-right h1", {
    x :300,
    opacity :0,
    duration: 1.5,
    delay :1,
})
gsap.from(".p1-right button" ,{
    x :300,
    opacity:0,
    delay :1,
    duration:1,
})
// =============================================
gsap.from(".page2 h2" ,{
    y:-100,
    delay :3,
    duration :1,
    opacity :0,
    scrollTrigger :{
       trigger : ".page2 h2",
    //    markers : true,
       start : "top 80%",
       end : "top 60%",
       scrub : true,
    }
})
gsap.from(".p2-bottom img" ,{
    y:-100,
    delay :3,
    duration :1,
    opacity :0,
    scrollTrigger :{
        trigger : ".page2 h2",
        // markers : true,
        start : "top 80%",
        end : "top 60%",
        scrub : true,
     }
})
gsap.from(".p3-left h1 " ,{
    x:-100,
    delay :3,
    duration :4,
    opacity :0,
    scrollTrigger :{
        trigger : ".p3-left h1",
        // markers : true,
        start : "top 80%",
        end : "top 60%",
        scrub : true,
     }
})
gsap.from(".p3-left p" ,{
    x:-100,
    delay :4,
    duration :1,
    opacity :0,
    scrollTrigger :{
        trigger : ".p3-left p",
        // markers : true,
        start : "top 80%",
        end : "top 60%",
        scrub : true,
     }
})
gsap.from(".p3-left button" ,{
    x:-100,
    delay :4,
    duration :1,
    opacity :0,
    scrollTrigger :{
        trigger : ".p3-left button",
        // markers : true,
        start : "top 80%",
        end : "top 60%",
        scrub : true,
     }
})
gsap.from(".p3-right" ,{
    y:100,
    delay :4,
    duration :1,
    opacity :0,
    scrollTrigger :{
        trigger : ".p3-right ",
        // markers : true,
        start : "top 80%",
        end : "top 60%",
        scrub : true,
     }
})
gsap.from(".p4-content h1" ,{
    y:-100,
    delay :6,
    duration :1,
    opacity :0,
    scrollTrigger :{
        trigger : ".p4-content h1",
        // markers : true,
        start : "top 80%",
        end : "top 60%",
        scrub : true,
     }
})
gsap.from(".p4-content p" ,{
    y:100,
    delay :6,
    duration :1,
    opacity :0,
    scrollTrigger :{
        trigger : ".p4-content p",
        // markers : true,
        start : "top 80%",
        end : "top 60%",
        scrub : true,
     }
})
gsap.from(".p4-content h3" ,{
    x:-100,
    delay :6,
    duration :1,
    opacity :0,
    scrollTrigger :{
        trigger : ".p4-content h3",
        // markers : true,
        start : "top 80%",
        end : "top 60%",
        scrub : true,
     }
})

gsap.from(".p4-content h1" ,{
    y:-100,
    delay :5,
    duration :1,
    opacity :0,
    scrollTrigger :{
        trigger : ".p4-content h4",
        // markers : true,
        start : "top 80%",
        end : "top 60%",
        scrub : true,
     }
})
gsap.from(".p5c-left h1" ,{
    y:-100,
    delay :7,
    duration :1,
    opacity :0, scrollTrigger :{
        trigger : ".p5c-left h1",
        // markers : true,
        start : "top 80%",
        end : "top 60%",
        scrub : true,
     }
})
gsap.from(".p5c-left h3" ,{
    y:-100,
    delay :7,
    duration :1,
    opacity :0,
    opacity :0, scrollTrigger :{
        trigger : ".p5c-left h3",
        // markers : true,
        start : "top 80%",
        end : "top 60%",
        scrub : true,
     }
    
})
gsap.from(".p5c-left button" ,{
    y:-100,
    delay :7,
    duration :1,
    opacity :0,
    opacity :0, scrollTrigger :{
        trigger : ".p5c-left button",
        // markers : true,
        start : "top 80%",
        end : "top 60%",
        scrub : true,
     }
})