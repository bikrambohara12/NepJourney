import React from 'react'

const Guides = () => {
  return (
    <div>
    <div className="p-6 max-w-screen-xl mx-auto">
      {/* Title & Filters */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Find a tour guide</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <input type="text" placeholder="Location" className="border px-4 py-2 rounded" />
          <input type="date" className="border px-4 py-2 rounded" />
          <input type="text" placeholder="Language" className="border px-4 py-2 rounded" />
          <input type="text" placeholder="Your Type" className="border px-4 py-2 rounded" />
          <button className="border px-6 py-2 rounded bg-gray-200 hover:bg-gray-300">Search</button>
        </div>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Search Results */}
        <div className="md:col-span-2 space-y-4">
          {["Andame", "Jon Smalt", "Candi name", "Same name"].map((name, i) => (
            <div key={i} className="border rounded p-4 flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded" />
              <div className="flex-1">
                <h3 className="font-semibold">{name}</h3>
                <p>★★★★★</p>
                <p className="text-sm text-gray-500">Languages spoken</p>
                <p className="text-sm text-gray-600">Experience susie drc... accum.</p>
              </div>
              <div className="text-sm text-gray-600 mt-1">{(5.5 + i * 0.1).toFixed(1)} km</div>
            </div>
          ))}
        </div>

        {/* Guide Profile */}
        <div className="border rounded p-4 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gray-300 rounded" />
            <div>
              <h3 className="font-semibold">Stavr</h3>
              <p>★★★★★</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500">Languages spoken</p>
            <p className="text-sm">Experience a à de•n</p>
          </div>

          <div className="flex gap-4">
            <button className="border px-4 py-2 rounded bg-blue-100 hover:bg-blue-200">Message</button>
            <button className="border px-4 py-2 rounded bg-green-100 hover:bg-green-200">Call</button>
          </div>

          <div>
            <h4 className="font-semibold">Tour packages</h4>
            <div className="text-sm mt-2">
              <p className="text-gray-600">Tarif tare - <strong>$1.50</strong></p>
              <p className="text-gray-500">Description</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Reviews</h4>
            <textarea
              placeholder="Review"
              className="w-full border rounded p-2 text-sm mt-1"
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default Guides
