import Image from "next/image";

const NavItem = ({ title, link }) => {
    return (
        <li class="nav-item" className="px-[16px] py-[8px] hover:bg-gray-300 tracking-[4px] text-[15px]">
            <a href={link}>{title}</a>
        </li>
    );
}

const NavBar = () => {
    return (
        <nav className="fixed z-50 top-0 left-0 w-full shadow-md flex flex-row justify-between px-[16px] py-[8px] bg-white">
            <ul>
                <NavItem title="Gourmet au Catering" link="#home" />
            </ul>
            <ul className="hidden sm:flex flex-row">
                <NavItem title="About" link="#about" />
                <NavItem title="Menu" link="#menu" />
                <NavItem title="Contact" link="#contact" />
            </ul>
        </nav>
    )
}

const InputField = ({ placeholder, type, required, name, value }) => {
    return (
        <p class="input-text">
            <input className="py-[16px] px-[8px] w-full border-b-[1px] border-solid border-b-[#ccc]" type={type ? type : "text"} placeholder={placeholder} name={name ? name : ""} required={required ? required : false} value={value ? value : null}></input>
        </p>
    )
}

export default function Home() {
    return (
        <div className="bg-white justify-center w-full">
            <main className="flex flex-col items-center">

                <div id="home" className="relative max-w-[1600px] min-w-[500px]">
                    <img src="https://www.w3schools.com/w3images/hamburger.jpg" />
                    <div className="absolute bottom-0 left-0 z-20 py-[12px] px-[24px]">
                        <h1 className="my-[10px] text-[36px] tracking-[5px] opacity-60">Le Catering</h1>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full xl:w-[1100px]">
                    <div id="about" className="flex flex-row flex-2 py-[64px]">
                        <div className="hidden lg:flex flex-1 px-[24px] py-[12px]">
                            <img className="rounded-[4px] opacity-75" src="https://www.w3schools.com/w3images/tablesetting2.jpg" width="600" height="750" />
                        </div>
                        <div className="flex flex-1 flex-col items-center px-[24px] py-[12px]">
                            <h1 className="text-[36px] my-[10px] font-playfair tracking-[5px]">About Catering</h1>
                            <br />
                            <h3 className="font-playfair tracking-[5px] text-[18px] mt-[10px]">Tradition since 1889</h3>
                            <p className="my-[18px]">
                                The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span className="bg-gray-100 px-[8px]">seasonal</span> ingredients.
                            </p>
                            <p className="text-[#757575]">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <hr className="border-t-[1px] border-solid my-[20px] h-[1px] w-full" />
                    <div id="menu" className="flex flex-row py-[64px] w-full">
                        <div className="flex flex-1 flex-col px-[24px] py-[12px]">
                            <h1 className="my-[10px] self-center">Our Menu</h1>
                            <br />
                            <h4>Bread Basket</h4>
                            <p className="text-[#757575] text-[15px] mt-[5px] mb-[15px]">Assortment of fresh baked fruit breads and muffins 5.50</p>
                            <br />
                            <h4>Honey Almond Granola with Fruits</h4>
                            <p className="text-[#757575] text-[15px] mt-[5px] mb-[15px]">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
                            <br />
                            <h4>Belgian Waffle</h4>
                            <p className="text-[#757575] text-[15px] mt-[5px] mb-[15px]">Vanilla flavored batter with malted flour 7.50</p>
                            <br />
                            <h4>Scrambled eggs</h4>
                            <p className="text-[#757575] text-[15px] mt-[5px] mb-[15px]">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
                            <br />
                            <h4>Blueberry Pancakes</h4>
                            <p className="text-[#757575] text-[15px] mt-[5px] mb-[15px]">With syrup, butter and lots of berries 8.50</p>
                        </div>
                        <div className="hidden lg:flex flex-1 px-[24px] py-[12px]">
                            <img className="rounded-[4px] opacity-75" src="https://www.w3schools.com/w3images/tablesetting.jpg" height="750" width="600" />
                        </div>
                    </div>
                    <hr className="border-t-[1px] border-solid my-[20px] h-[1px] w-full" />
                    <div id="contact" className="flex flex-col py-[64px] px-[12px] w-full">
                        <h1 className="self-start my-[10px]">Contact</h1>
                        <br></br>
                        <p class="normal-text">We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
                        <p className="text-[#607d8b]">
                            <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
                        </p>
                        <p class="normal-text">You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
                        <InputField name="name" placeholder={"Name"} required={true} />

                        <InputField name="people" placeholder={"How many people?"} required={true} type="number" />

                        <InputField name="date" placeholder={"Date and Time"} required={true} type="datetime-local" value="2020-11-16T20:00" />

                        <InputField name="message" placeholder={"Message \\ Special requirements"} />
                        <p class="normal-text" className="my-[15px]">
                            <button className="self-start my-[16px] px-[16px] py-[8px] bg-[#f1f1f1]">SEND MESSAGE</button>
                        </p>
                    </div>
                </div>
            </main>
            <footer class="flex justify-center py-[32px] bg-gray-200">
                <p class="normal-text">Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="hover:text-[#4CAF50]"><u>w3.css</u></a></p>
            </footer>
            <NavBar />
        </div>
    );
}
