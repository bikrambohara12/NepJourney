
import React, { useContext, useEffect, useState } from 'react';
import { GuideContext } from '../../context/GuideContext';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const GuideProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData, backendUrl } =
    useContext(GuideContext);
  const { currency } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);

  const updateProfile = async () => {
    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available,
        phone: profileData.phone,
        email: profileData.email,
        name: profileData.name,
        about: profileData.about,
      };

      const { data } = await axios.post(
        `${backendUrl}/api/guide/update-profile`,
        updateData,
        { headers: { Authorization: `Bearer ${dToken}` } }
      );

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken, getProfileData]);

  return (
    profileData && (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 h-32">
            <div className="absolute -bottom-16 left-8">
              <img  src={profileData.image}  alt=""  className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover" />
            </div>
          </div>

          <div className="pt-20 px-8 pb-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {isEdit ? (
                  <input type="text" value={profileData.name} onChange={(e) =>  setProfileData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                ) : (
                  profileData.name
                )}
              </h1>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  {profileData.degree} - {profileData.speciality}
                </span>
                <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {profileData.experience}
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Education:</h3>
                <p className="text-gray-600">{profileData.education}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Email:</h3>
                <p className="text-gray-600">
                  {isEdit ? (
                    <input type="email" value={profileData.email} onChange={(e) => setProfileData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    profileData.email
                  )}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Phone:</h3>
                <p className="text-gray-600">
                  {isEdit ? (
                    <input type="text" value={profileData.phone} onChange={(e) => setProfileData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    profileData.phone
                  )}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Address:</h3>
                <p className="text-gray-600">
                  {isEdit ? (
                    <input type="text" value={profileData.address} onChange={(e) =>  setProfileData((prev) => ({
                          ...prev,
                          address: e.target.value,
                        }))
                      }  />
                  ) : (
                    profileData.address
                  )}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">About:</h3>
              <p className="text-gray-600">
                {isEdit ? (
                  <textarea
                    rows="4"
                    value={profileData.about}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        about: e.target.value,
                      }))
                    }
                    className="w-full p-2 border rounded-md" />
                ) : (
                  profileData.about
                )}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-lg font-bold">
                  Booking fee: {currency}
                  {isEdit ? (
                    <input
                      type="number"
                      value={profileData.fees}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          fees: e.target.value,
                        }))
                      }
                      className="ml-2 text-black p-1 rounded" />
                  ) : (
                    profileData.fees
                  )}
                </span>
              </div>

              <div className="flex items-center space-x-3 bg-gray-100 px-6 py-3 rounded-full">
                <input  type="checkbox"  checked={profileData.available}  onChange={() =>  isEdit &&
                    setProfileData((prev) => ({
                      ...prev,
                      available: !prev.available,
                    }))
                  }
                  className="w-5 h-5" />
                <label className="text-gray-700 font-medium">Available</label>
              </div>
            </div>

            <div className="flex justify-center">
              {isEdit ? (
                <button
                  onClick={updateProfile}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full" >
                  Save Profile
                </button>
              ) : (
                <button onClick={() => setIsEdit(true)}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full" > Edit Profil  </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default GuideProfile;

