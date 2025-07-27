import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import imageCompression from 'browser-image-compression'; // Import

const AddGuide = () => {
  const [guideimage, setGuideImage] = useState(null); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('1 year');
  const [fee, setFee] = useState('');
  const [about, setAbout] = useState('');
  const [speciality, setSpeciality] = useState('advantureguide');
  const [education, setEducation] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [location, setLocation] = useState('');
  const [language, setLanguage] = useState('');
  const [loading, setLoading] = useState(false);

  const { backendUrl, aToken } = useContext(AdminContext);

  // ✅ Image change handler with validation
  const onImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 25 * 1024 * 1024) {
      toast.error("File too large. Must be less than 25MB.");
      return;
    }

    try {
      const options = {
        maxSizeMB: 1, // Compress to around 1MB
        maxWidthOrHeight: 1024,
        useWebWorker: true,
      };

      const compressedFile = await imageCompression(file, options);
      setGuideImage(compressedFile);
    } catch (err) {
      toast.error("Image compression failed.");
      console.error(err);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!guideimage) {
        setLoading(false);
        return toast.error('Image not selected');
      }

      if (!fee || isNaN(fee)) {
        setLoading(false);
        return toast.error('Fee must be a number');
      }

      const formData = new FormData();
      formData.append('image', guideimage);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('contact', contact);
      formData.append('experience', experience);
      formData.append('fee', Number(fee));
      formData.append('about', about);
      formData.append('speciality', speciality);
      formData.append('education', education);
      formData.append('address', `${address1}, ${address2}`);
      formData.append('location', location);
      formData.append('language', language);

      const { data } = await axios.post(backendUrl + '/api/admin/addguide', formData, {
        headers: { aToken },
      });

      setLoading(false);

      if (data.success) {
        toast.success(data.message);

        // Reset form fields
        setGuideImage(null);
        setName('');
        setEmail('');
        setPassword('');
        setAddress1('');
        setAddress2('');
        setEducation('');
        setAbout('');
        setFee('');
        setLocation('');
        setLanguage('');
        setContact('');
        setExperience('1 year');
        setSpeciality('advantureguide');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message || error.message);
      console.error(error);
    }
  };


  return (
    <div className="pt-8 px-50 pb-8">
      <form
        onSubmit={onSubmitHandler}
        className="mx-auto p-6 bg-white shadow-lg rounded-xl space-y-6 pb-2"
      >
        <h2 className="text-2xl font-bold text-gray-800">Add Guide</h2>

        <div className="flex flex-col items-center">
          <label htmlFor="guide-image" className="cursor-pointer">
            <img
              src={guideimage ? URL.createObjectURL(guideimage) : assets.upload_area}
              alt="Upload"
              className="w-28 h-28 object-cover border-2 border-dashed border-gray-400 rounded-full"
            />
          </label>
          {/* <input
            onChange={(e) => setGuideImage(e.target.files[0])}
            type="file"
            id="guide-image"
            hidden
          /> */}

            <input
          onChange={onImageChange} 
          type="file"
          id="guide-image"
          hidden
        />
          <p className="text-sm mt-2 text-gray-500">Upload Guide Image</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Guide Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              required
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Guide Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              required
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Guide Contact</label>
            <input
              onChange={(e) => setContact(e.target.value)}
              value={contact}
              type="number"
              placeholder="Contact"
              required
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Experience</label>
            <select
              onChange={(e) => setExperience(e.target.value)}
              value={experience}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i} value={`${i + 1} year`}>{`${i + 1} year`}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Fees</label>
            <input
              onChange={(e) => setFee(e.target.value)}
              value={fee}
              type="number"
              placeholder="Fee"
              required
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Speciality</label>
            <select
              onChange={(e) => setSpeciality(e.target.value)}
              value={speciality}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="cultureguide">Culture Guide</option>
              <option value="localguide">Local Guide</option>
              <option value="familyguide">Family Guide</option>
              <option value="natureguide">Nature Guide</option>
              <option value="luxoryguide">Luxury Guide</option>
              <option value="advantureguide">Adventure Guide</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Education</label>
            <input
              onChange={(e) => setEducation(e.target.value)}
              value={education}
              type="text"
              placeholder="Education"
              required
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Address</label>
            <div className="flex gap-2">
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                type="text"
                placeholder="Address 1"
                required
                className="w-1/2 border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                type="text"
                placeholder="Address 2"
                required
                className="w-1/2 border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Location</label>
            <input
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              type="text"
              placeholder="Location"
              required
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Language</label>
            <input
              onChange={(e) => setLanguage(e.target.value)}
              value={language}
              type="text"
              placeholder="Language"
              required
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">About Guide</label>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            placeholder="Write about guide"
            rows={5}
            required
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-600 text-white px-6 py-2 rounded-md transition ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
          >
            {loading ? 'Uploading...' : 'Add Guide'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGuide;
