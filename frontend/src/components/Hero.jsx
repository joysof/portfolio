const Hero = () => {
  return (
    <section className="h-screen flex flex-row justify-between items-center text-center dark:bg-gray-900 text-gray-800 dark:text-gray-100 mt-[110px] transition-colors duration-500 px-10 shadow-2xl rounded-2xl overflow-hidden">
      {/* left side  */}
      <div>
          <img className="w-56 h-56 rounded-full border-4 border-transparent hover:border-teal-400 shadow-lg hover:shadow-teal-400/50 transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer object-cover" src="https://scontent.fdac165-1.fna.fbcdn.net/v/t39.30808-6/550235718_1898758700981600_4206852591479790895_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEqy4anpQWW3ut4srW1oyzguVbTyZ6mNkW5VtPJnqY2RUoWDj7r6Bna4glA43Txb0voQq8hZVoEse13PjetIe2Y&_nc_ohc=ock8Uaoc9isQ7kNvwEoiuKF&_nc_oc=AdlwHYg9fbQp4Fetbi1HD4rZi1ykjuM3kTdI9fb_9VLciLxxH_1NEv7LO2vd94UP-GA&_nc_zt=23&_nc_ht=scontent.fdac165-1.fna&_nc_gid=p8PQ25togVNHbYrhznmu6w&oh=00_AfdoIJDZ4ftrz3F1QmpisHwy4YEyM2ty0XbaFV9YyHjtQQ&oe=68EC89AD" alt="" />
      </div>
      {/* right side */}
      <div>
        <h3>my na me is sajib </h3>
      </div>
    </section>
  )
}

export default Hero
