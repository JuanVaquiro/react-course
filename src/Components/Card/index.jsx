
function Cart() {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-0.5">
          Electronics
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://cdn.thewirecutter.com/wp-content/media/2021/11/kidsheadphones-2048px-7345.jpg"
          alt="headphones"
        />
        <button className="absolute top-0 right-0 flex items-center justify-center bg-white w-6 h-6 rounded-full m-2 p-1">
          +
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">Headphones</span>
        <span className="text-lg font-medium">$300</span>
      </p>
    </div>
  )
}

export default Cart