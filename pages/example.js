function Example() {
  return (
    <div className="container mx-auto">
      <div className="border mb-5">
        <h1 className="font-black text-xl sm:text-3xl">example</h1>
        <p>this page is an example.</p>
      </div>

      <div className="border flex h-20">
        <div className="bg-amber-500 basis-1/3 flex justify-center items-center">
          <p>box 1</p>
        </div>

        <div className="bg-purple-500 basis-2/3 flex justify-center items-center">
          <p>box 2</p>
        </div>
      </div>
    </div>
  );
}

export default Example;
