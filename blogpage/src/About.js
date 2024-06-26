import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-600" style={{minHeight:'110vh'}}>
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-dark-800">Grigo Blogs</h1>
      </div>
    </header>

    <main className="container mx-auto px-10 py-8">
      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-black-800 mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed">Welcome to Grigo Blogs!.</p>
        <p className="text-gray-700 leading-relaxed mt-4">At Grigo Blogs, we believe in the power of storytelling and the importance of sharing knowledge. Our blog is a space where ideas come to life, where stories are told, and where information is shared with a community of curious minds.
<br />
Our Mission
<br />
Our mission is to provide engaging and informative content that inspires and educates our readers. We cover a wide range of topics, from personal development and technology to lifestyle and current events. Our goal is to be a trusted source of information and a place where readers can find both inspiration and practical advice.
<br />
Our Team
<br />
Grigo Blogs is run by a dedicated team of writers, editors, and creatives who are passionate about their fields. Each team member brings a unique perspective and expertise, ensuring that our content is diverse, well-researched, and compelling.
<br />
What We Offer
<br />
In-Depth Articles: We publish in-depth articles that explore various topics in detail, providing valuable insights and actionable advice.
<br />
How-To Guides: Our how-to guides are designed to help you navigate through different challenges, whether you're looking to improve a skill or learn something new.
Personal Stories: We believe that personal stories have the power to connect and inspire. We share stories from our team and our readers to highlight different experiences and viewpoints.
<br />
Join Our Community
We invite you to join our community of readers and contributors. Whether you're here to read our latest posts, share your thoughts, or contribute your own story, we welcome you with open arms.

Thank you for visiting Grigo Blogs. We hope you enjoy your time here and find something that sparks your interest.

Happy reading!

The Grigo Blogs Team
</p>
        <p className="text-gray-700 leading-relaxed mt-4">Feel free to <a href="/" className="text-blue-500 hover:underline">contact us</a> if you have any questions or suggestions. We love hearing from our readers!</p>
        
      </section>
    </main>
  </div>
  )
}

export default About