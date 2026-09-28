"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const BuyerProfile = () => {
  const { user } = useUser();

  const [isEditOpen, setIsEditOpen] = useState(false);

  const [profile, setProfile] = useState({
    fullName: "",
    phone: "",
    location: "",
    email: "",
    profileImage: "",
  });

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState("");

  const [isSaving, setIsSaving] = useState(false);

  // ================= FETCH PROFILE =================

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/profile");
        const data = await response.json();

        console.log("PROFILE DATA:", data);

        if (data.success) {
          setProfile(data.user);
        }
      } catch (error) {
        console.log("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  // ================= IMAGE PREVIEW =================

  useEffect(() => {
    if (!profileImage) {
      setPreviewImage("");
      return;
    }

    const imageUrl = URL.createObjectURL(profileImage);

    setPreviewImage(imageUrl);

    return () => {
      URL.revokeObjectURL(imageUrl);
    };
  }, [profileImage]);

  // ================= REDUX =================

  const cartItem = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItem.length;

  const cartWishList = useSelector(
    (state: RootState) => state.wishlist.items
  );

  const wishListCount = cartWishList.length;

  // ================= CARDS =================

  const cards = [
    {
      icon: "📦",
      name: "My Orders",
      details: "View your order history",
      count: 5,
      link: "/myorder",
      linkText: "View Orders",
    },
    {
      icon: "❤️",
      name: "Wishlist",
      details: "Your saved items",
      count: wishListCount > 0 ? wishListCount.toString() : undefined,
      link: "/wishlist",
      linkText: "View Wishlist",
    },
    {
      icon: "📍",
      name: "My Location",
      details: "Manage delivery address",
      count: null,
      link: "/buyer/address",
      linkText: "Manage Address",
    },
    {
      icon: "🛒",
      name: "My Cart",
      details: "Your cart items",
      count: cartCount > 0 ? cartCount.toString() : undefined,
      link: "/cart",
      linkText: "View Cart",
    },
  ];

  // ================= SAVE PROFILE =================

  const handleSaveProfile = async () => {
    try {
      setIsSaving(true);

      const formData = new FormData();

      formData.append("fullName", profile.fullName || "");
      formData.append("phone", profile.phone || "");
      formData.append("location", profile.location || "");

      if (profileImage) {
        formData.append("profileImage", profileImage);
      }

      const response = await fetch("/api/profile", {
        method: "PATCH",
        body: formData,
      });

      const data = await response.json();

      console.log("RESPONSE STATUS:", response.status);
      console.log("PROFILE SAVE RESPONSE:", data);

      if (data.success) {
        // Update profile with database response
        setProfile(data.user);

        // Clear selected file
        setProfileImage(null);
        setPreviewImage("");

        // Close modal
        setIsEditOpen(false);
      } else {
        console.log("Profile update failed:", data.message);
      }
    } catch (error) {
      console.log("Error updating profile:", error);
    } finally {
      setIsSaving(false);
    }
  };

  // ================= OPEN MODAL =================

  const handleOpenEdit = () => {
    setProfileImage(null);
    setPreviewImage("");
    setIsEditOpen(true);
  };

  // ================= CLOSE MODAL =================

  const handleCloseEdit = () => {
    setProfileImage(null);
    setPreviewImage("");
    setIsEditOpen(false);
  };

  return (
    <div className="w-full">

      {/* ================= PROFILE HEADER ================= */}

      <div className="mt-6 sm:mt-10 bg-white border border-gray-200 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-sm">

        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6">

          {/* Profile Information */}

          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">

            {/* Profile Image */}

            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-fuchsia-100 flex items-center justify-center shrink-0">

              {profile.profileImage ? (
                <img
                  src={profile.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-4xl sm:text-5xl">
                  👤
                </span>
              )}

            </div>

            {/* Information */}

            <div className="text-center sm:text-left">

              <p className="text-xl sm:text-2xl font-bold text-gray-800">
                {profile.fullName || "Add Your Name"}
              </p>

              <p className="text-gray-500 mt-1 break-all">
                {profile.email ||
                  user?.primaryEmailAddress?.emailAddress ||
                  "Email not available"}
              </p>

              <p className="text-gray-500 mt-1">
                {profile.phone || "Add Phone Number"}
              </p>

            </div>

          </div>

          {/* Edit Button */}

          <button
            onClick={handleOpenEdit}
            className="w-full sm:w-auto border border-fuchsia-700 text-fuchsia-900 hover:bg-fuchsia-700 hover:text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            ✏️ Edit Profile
          </button>

        </div>

      </div>

      {/* ================= CARD SECTION ================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

        {cards.map((card, index) => (

          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >

            <div className="flex items-start justify-between">

              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center">
                <span className="text-xl">
                  {card.icon}
                </span>
              </div>

              {card.count !== null && (
                <div className="text-2xl font-bold text-fuchsia-800">
                  {card.count}
                </div>
              )}

            </div>

            <div className="mt-5">

              <p className="font-bold text-gray-800 text-lg">
                {card.name}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {card.details}
              </p>

            </div>

            <div className="mt-5 pt-4 border-t border-gray-100">

              <Link
                href={card.link}
                className="text-fuchsia-700 font-semibold text-sm hover:text-fuchsia-900 flex items-center gap-2"
              >
                {card.linkText}

                <span className="text-lg">
                  →
                </span>
              </Link>

            </div>

          </div>

        ))}

      </div>

      {/* ================= PERSONAL INFORMATION ================= */}

      <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-5 sm:p-8 shadow-sm">

        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

          {/* Full Name */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>

            <input
              value={profile.fullName}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  fullName: e.target.value,
                })
              }
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600"
            />

          </div>

          {/* Email */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>

            <input
              value={
                profile.email ||
                user?.primaryEmailAddress?.emailAddress ||
                ""
              }
              type="email"
              readOnly
              className="w-full border border-gray-300 bg-gray-100 rounded-xl px-4 py-3 outline-none cursor-not-allowed"
            />

          </div>

          {/* Phone */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone
            </label>

            <input
              value={profile.phone}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  phone: e.target.value,
                })
              }
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600"
            />

          </div>

          {/* Location */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location
            </label>

            <input
              value={profile.location}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  location: e.target.value,
                })
              }
              type="text"
              placeholder="Enter your location"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600"
            />

          </div>

        </div>

        <div className="mt-7">

          <button
            onClick={handleSaveProfile}
            disabled={isSaving}
            className="w-full sm:w-auto bg-fuchsia-800 hover:bg-fuchsia-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>

        </div>

      </div>

      {/* ================= ACCOUNT SETTINGS ================= */}

      <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-5 sm:p-8 shadow-sm">

        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Account Settings
        </h2>

        <div className="mt-6">

          <div className="flex items-center justify-between py-5 border-b border-gray-200 cursor-pointer hover:bg-gray-50 px-3 rounded-xl">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center">
                🔒
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Change Password
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Update your password for better security
                </p>
              </div>

            </div>

            <span className="text-gray-500 text-xl">
              →
            </span>

          </div>

          <div className="flex items-center justify-between py-5 border-b border-gray-200 cursor-pointer hover:bg-gray-50 px-3 rounded-xl">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                🔔
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Notifications
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Manage your notification preferences
                </p>
              </div>

            </div>

            <span className="text-gray-500 text-xl">
              →
            </span>

          </div>

          <div className="flex items-center justify-between py-5 cursor-pointer hover:bg-gray-50 px-3 rounded-xl">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                🚪
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Logout
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Sign out from your account
                </p>
              </div>

            </div>

            <span className="text-gray-500 text-xl">
              →
            </span>

          </div>

        </div>

      </div>

      {/* ================= EDIT PROFILE MODAL ================= */}

      {isEditOpen && (

        <div className="fixed inset-0 z-50 bg-black/50 p-4 sm:p-6 overflow-y-auto">

          <div className="min-h-full flex items-center justify-center">

            <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl my-6">

              {/* Modal Header */}

              <div className="flex items-center justify-between px-5 sm:px-8 py-5 border-b">

                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Edit Profile
                </h2>

                <button
                  onClick={handleCloseEdit}
                  className="text-gray-500 hover:text-gray-800 text-2xl"
                >
                  ✕
                </button>

              </div>

              {/* Modal Body */}

              <div className="px-5 sm:px-8 py-6 space-y-5">

                {/* Profile Image */}

                <div className="flex flex-col items-center">

                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-fuchsia-100 flex items-center justify-center border-4 border-fuchsia-100">

                    {previewImage ? (

                      <img
                        src={previewImage}
                        alt="Selected profile"
                        className="w-full h-full object-cover"
                      />

                    ) : profile.profileImage ? (

                      <img
                        src={profile.profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />

                    ) : (

                      <span className="text-5xl">
                        👤
                      </span>

                    )}

                  </div>

                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/jpg,image/webp"
                    id="profileImage"
                    hidden
                    onChange={(e) => {

                      const file = e.target.files?.[0];

                      if (!file) return;

                      // Optional size validation
                      if (file.size > 5 * 1024 * 1024) {
                        alert("Please select an image smaller than 5MB.");
                        return;
                      }

                      setProfileImage(file);

                    }}
                  />

                  <label
                    htmlFor="profileImage"
                    className="mt-4 cursor-pointer bg-fuchsia-800 hover:bg-fuchsia-700 text-white px-5 py-2.5 rounded-xl font-semibold transition"
                  >
                    Change Image
                  </label>

                  {profileImage && (
                    <p className="text-xs text-gray-500 mt-2">
                      {profileImage.name}
                    </p>
                  )}

                </div>

                {/* Full Name */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>

                  <input
                    value={profile.fullName}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        fullName: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600"
                  />

                </div>

                {/* Phone */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>

                  <input
                    value={profile.phone}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        phone: e.target.value,
                      })
                    }
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600"
                  />

                </div>

                {/* Email */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>

                  <input
                    value={
                      profile.email ||
                      user?.primaryEmailAddress?.emailAddress ||
                      ""
                    }
                    type="email"
                    readOnly
                    className="w-full border border-gray-300 bg-gray-100 rounded-xl px-4 py-3 outline-none cursor-not-allowed"
                  />

                  <p className="text-xs text-gray-500 mt-1">
                    Email is managed by your account.
                  </p>

                </div>

              </div>

              {/* Modal Footer */}

              <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 px-5 sm:px-8 py-5 border-t">

                <button
                  onClick={handleCloseEdit}
                  disabled={isSaving}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSaveProfile}
                  disabled={isSaving}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-fuchsia-800 hover:bg-fuchsia-700 disabled:bg-gray-400 text-white font-semibold transition"
                >
                  {isSaving ? "Saving..." : "Save Changes"}
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default BuyerProfile;
