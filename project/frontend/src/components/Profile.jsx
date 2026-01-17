import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Profile = () => {
  const { user, logout, login } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(user?.username || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        "http://localhost:5001/auth/api/update-user",
        { username: newUsername },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      // Update context with new user data
      // We need to preserve the token and existing user properties while updating the username
      const updatedUser = { ...user, username: res.data.user.username };
      // Depending on how login is implemented, we might need to pass the token again or just update part of the state.
      // Looking at AuthContext, login takes (userData, token).
      login(updatedUser, token);

      setMessage("Username updated successfully!");
      setIsEditing(false);
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="text-center text-white mt-10">
        Please log in to view your profile.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-center">
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-indigo-600 text-4xl font-bold">
            {user.username.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-2xl font-bold">{user.username}</h2>
          <p className="text-gray-200">{user.email}</p>
        </div>

        <div className="p-6">
          {message && (
            <div
              className={`p-3 mb-4 rounded text-center ${message.includes("success") ? "bg-green-600/20 text-green-400" : "bg-red-600/20 text-red-400"}`}
            >
              {message}
            </div>
          )}

          {isEditing ? (
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                  placeholder="Enter new username"
                  required
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition disabled:opacity-50"
                >
                  {loading ? "Saving..." : "Save"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setNewUsername(user.username);
                    setMessage("");
                  }}
                  className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="border-b border-gray-700 pb-4">
                <p className="text-sm text-gray-400">Account Type</p>
                <p className="font-medium capitalize">{user.role || "User"}</p>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition"
                >
                  Edit Profile
                </button>
                <button
                  onClick={logout}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
