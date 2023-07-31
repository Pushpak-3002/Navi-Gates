import React from 'react'

const Home =() =>{
  return(
    <>
    <body>
    <main>
        <div class="intro">
            <h1>Ground Personnel Tracking</h1>
            <p>Welcome to Our Personnel Tracking System</p>
            <button><a href="Main Page.html">Start Tracking</a></button>
        </div>
        <div class="achievements">
            <div class="work">
            <i class="zmdi zmdi-check-circle zmdi-hc-lg"></i>
                <p class="work-heading">Easy Access</p>
                <p class="work-text">All the features are easily accesssible!</p>
            </div>
            <div class="work">
            <i class="zmdi zmdi-smartphone-android zmdi-hc-lg"></i>
                <p class="work-heading">Easy to Use</p>
                <p class="work-text">We have ensured the user doesn't face any difficulty!</p>
            </div>
            <div class="work">
            <i class="zmdi zmdi-arrow-right-top zmdi-hc-lg"></i>
                <p class="work-heading">Always Developing</p>
                <p class="work-text">This is just the start, look forward to more features!</p>
            </div>
            
        </div>
    </main>
    <footer class="footer">
        <div class="copy">&copy; 2022 Developer</div>
        <div class="bottom-links">
            <div class="links2">
                <a href="#">Home</a>
                <a href="/About">About</a>
                <a href="/Contact">Contact</a>
            </div>
            <div class="links3">
                <span>Socials</span>
                <div class="undersocial">
                    <a href="https://www.facebook.com/"><i class="zmdi zmdi-facebook"></i></a>
                    <a href="https://www.instagram.com/"><i class="zmdi zmdi-instagram"></i></a>
                    <a href="https://www.google.com/"><i class="zmdi zmdi-google"></i></a>
                </div>
            </div>
        </div>
    </footer>
</body>
    </>
  )
}

export default Home