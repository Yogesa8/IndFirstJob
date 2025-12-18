import { useState } from "react";
import { 
  User, 
  Bell, 
  Shield, 
  Eye, 
  Briefcase, 
  Globe, 
  Lock, 
  Mail, 
  Smartphone, 
  Save, 
  X, 
  ChevronRight,
  HelpCircle,
  LogOut,
  Trash2,
  Key,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("account");
  const [editSection, setEditSection] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  // State for form data
  const [formData, setFormData] = useState({
    account: {
      name: "Ananya Grover",
      email: "ananyasharma@gmail.com",
      phone: "+91 98123 55679",
      password: "********",
      twoFactorAuth: true
    },
    profile: {
      visibility: "public",
      showSalary: true,
      showContactInfo: "recruiters",
      profilePicture: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    notifications: {
      jobAlerts: true,
      applicationUpdates: true,
      recruiterMessages: true,
      newsletter: false,
      pushNotifications: true,
      emailNotifications: true
    },
    privacy: {
      whoCanSeeProfile: "everyone",
      whoCanContact: "recruiters",
      dataSharing: true,
      analyticsTracking: false
    },
    jobPreferences: {
      preferredLocations: ["Mumbai", "Bangalore", "Remote"],
      expectedSalary: "12.5 Lac",
      jobTypes: ["full-time", "remote"],
      industries: ["IT", "Design", "E-commerce"],
      noticePeriod: "30 days"
    },
    communication: {
      language: "English",
      timezone: "Asia/Kolkata"
    }
  });

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleArrayChange = (section, index, value) => {
    setFormData(prev => {
      const newArray = [...prev[section][field]];
      newArray[index] = value;
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: newArray
        }
      };
    });
  };

  const addArrayItem = (section, field, item) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: [...prev[section][field], item]
      }
    }));
  };

  const removeArrayItem = (section, field, index) => {
    setFormData(prev => {
      const newArray = [...prev[section][field]];
      newArray.splice(index, 1);
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: newArray
        }
      };
    });
  };

  const settingsSections = [
    { id: "account", label: "Account Settings", icon: User },
    { id: "profile", label: "Profile Settings", icon: Eye },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "privacy", label: "Privacy", icon: Shield },
    { id: "jobPreferences", label: "Job Preferences", icon: Briefcase },
    { id: "communication", label: "Communication", icon: Globe },
    { id: "security", label: "Security", icon: Lock },
    { id: "help", label: "Help & Support", icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-6">Settings</h2>
        <nav className="space-y-1">
          {settingsSections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeSection === section.id
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon size={20} />
                <span>{section.label}</span>
                {activeSection === section.id && (
                  <ChevronRight size={16} className="ml-auto" />
                )}
              </button>
            );
          })}
        </nav>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors">
            <LogOut size={20} />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Account Settings */}
          {activeSection === "account" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-semibold mb-2">Account Settings</h1>
                <p className="text-gray-600">Manage your account information and credentials</p>
              </div>

              <div className="bg-white rounded-xl p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={formData.account.profilePicture}
                      alt="Profile"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium">Profile Picture</h3>
                      <p className="text-sm text-gray-500">JPG, GIF or PNG. Max size of 2MB</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                    Change
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.account.name}
                      onChange={(e) => handleInputChange("account", "name", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div className="flex">
                      <input
                        type="email"
                        value={formData.account.email}
                        onChange={(e) => handleInputChange("account", "email", e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button className="px-4 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg text-sm font-medium hover:bg-gray-200">
                        Verify
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <div className="flex">
                      <input
                        type="tel"
                        value={formData.account.phone}
                        onChange={(e) => handleInputChange("account", "phone", e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button className="px-4 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg text-sm font-medium hover:bg-gray-200">
                        Verify
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <div className="flex">
                      <input
                        type="password"
                        value={formData.account.password}
                        disabled
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg bg-gray-50 text-gray-500"
                      />
                      <button 
                        onClick={() => setEditSection("password")}
                        className="px-4 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg text-sm font-medium hover:bg-gray-200"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <button
                    onClick={() => handleInputChange("account", "twoFactorAuth", !formData.account.twoFactorAuth)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      formData.account.twoFactorAuth ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        formData.account.twoFactorAuth ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-200">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2">
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Profile Settings */}
          {activeSection === "profile" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-semibold mb-2">Profile Settings</h1>
                <p className="text-gray-600">Control how your profile appears to others</p>
              </div>

              <div className="bg-white rounded-xl p-6 space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Profile Visibility</h3>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <p className="font-medium">Make Profile Public</p>
                        <p className="text-sm text-gray-500">Your profile will be visible to recruiters and other users</p>
                      </div>
                      <select
                        value={formData.profile.visibility}
                        onChange={(e) => handleInputChange("profile", "visibility", e.target.value)}
                        className="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                        <option value="recruiters">Recruiters Only</option>
                      </select>
                    </label>

                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <p className="font-medium">Show Current Salary</p>
                        <p className="text-sm text-gray-500">Display your current CTC on your profile</p>
                      </div>
                      <button
                        onClick={() => handleInputChange("profile", "showSalary", !formData.profile.showSalary)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.profile.showSalary ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.profile.showSalary ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </label>

                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <p className="font-medium">Contact Information</p>
                        <p className="text-sm text-gray-500">Who can see your email and phone number</p>
                      </div>
                      <select
                        value={formData.profile.showContactInfo}
                        onChange={(e) => handleInputChange("profile", "showContactInfo", e.target.value)}
                        className="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="everyone">Everyone</option>
                        <option value="recruiters">Recruiters Only</option>
                        <option value="hidden">Hidden</option>
                      </select>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-200">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2">
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Notification Settings */}
          {activeSection === "notifications" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-semibold mb-2">Notification Preferences</h1>
                <p className="text-gray-600">Choose how you want to be notified</p>
              </div>

              <div className="bg-white rounded-xl p-6 space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Email Notifications</h3>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <p className="font-medium">Job Alerts</p>
                        <p className="text-sm text-gray-500">New jobs matching your preferences</p>
                      </div>
                      <button
                        onClick={() => handleInputChange("notifications", "jobAlerts", !formData.notifications.jobAlerts)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.notifications.jobAlerts ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.notifications.jobAlerts ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </label>

                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <p className="font-medium">Application Updates</p>
                        <p className="text-sm text-gray-500">Status changes for your job applications</p>
                      </div>
                      <button
                        onClick={() => handleInputChange("notifications", "applicationUpdates", !formData.notifications.applicationUpdates)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.notifications.applicationUpdates ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.notifications.applicationUpdates ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </label>

                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <p className="font-medium">Recruiter Messages</p>
                        <p className="text-sm text-gray-500">Messages from interested recruiters</p>
                      </div>
                      <button
                        onClick={() => handleInputChange("notifications", "recruiterMessages", !formData.notifications.recruiterMessages)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.notifications.recruiterMessages ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.notifications.recruiterMessages ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </label>

                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <p className="font-medium">Newsletter</p>
                        <p className="text-sm text-gray-500">Weekly career tips and job market insights</p>
                      </div>
                      <button
                        onClick={() => handleInputChange("notifications", "newsletter", !formData.notifications.newsletter)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.notifications.newsletter ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.notifications.newsletter ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-200">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2">
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Privacy Settings */}
          {activeSection === "privacy" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-semibold mb-2">Privacy Settings</h1>
                <p className="text-gray-600">Control your privacy and data sharing preferences</p>
              </div>

              <div className="bg-white rounded-xl p-6 space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Privacy Controls</h3>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <p className="font-medium">Profile Visibility</p>
                        <p className="text-sm text-gray-500">Who can view your profile</p>
                      </div>
                      <select
                        value={formData.privacy.whoCanSeeProfile}
                        onChange={(e) => handleInputChange("privacy", "whoCanSeeProfile", e.target.value)}
                        className="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="everyone">Everyone</option>
                        <option value="recruiters">Recruiters Only</option>
                        <option value="connections">Connections Only</option>
                        <option value="private">Private</option>
                      </select>
                    </label>

                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <p className="font-medium">Contact Permissions</p>
                        <p className="text-sm text-gray-500">Who can send you messages</p>
                      </div>
                      <select
                        value={formData.privacy.whoCanContact}
                        onChange={(e) => handleInputChange("privacy", "whoCanContact", e.target.value)}
                        className="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="everyone">Everyone</option>
                        <option value="recruiters">Recruiters Only</option>
                        <option value="connections">Connections Only</option>
                        <option value="none">No One</option>
                      </select>
                    </label>

                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <p className="font-medium">Data Sharing</p>
                        <p className="text-sm text-gray-500">Share your data with partner companies</p>
                      </div>
                      <button
                        onClick={() => handleInputChange("privacy", "dataSharing", !formData.privacy.dataSharing)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.privacy.dataSharing ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.privacy.dataSharing ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </label>

                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <p className="font-medium">Analytics Tracking</p>
                        <p className="text-sm text-gray-500">Help us improve with usage analytics</p>
                      </div>
                      <button
                        onClick={() => handleInputChange("privacy", "analyticsTracking", !formData.privacy.analyticsTracking)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.privacy.analyticsTracking ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.privacy.analyticsTracking ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </label>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => setShowDeleteModal(true)}
                    className="px-4 py-2 text-red-600 border border-red-200 rounded-lg font-medium hover:bg-red-50 flex items-center gap-2"
                  >
                    <Trash2 size={18} />
                    Delete Account
                  </button>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2">
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Job Preferences */}
          {activeSection === "jobPreferences" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-semibold mb-2">Job Preferences</h1>
                <p className="text-gray-600">Set your preferences to find the right job opportunities</p>
              </div>

              <div className="bg-white rounded-xl p-6 space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Job Search Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Locations</label>
                      <div className="space-y-2">
                        {formData.jobPreferences.preferredLocations.map((location, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <input
                              type="text"
                              value={location}
                              onChange={(e) => {
                                const newLocations = [...formData.jobPreferences.preferredLocations];
                                newLocations[index] = e.target.value;
                                handleInputChange("jobPreferences", "preferredLocations", newLocations);
                              }}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formData.jobPreferences.preferredLocations.length > 1 && (
                              <button
                                onClick={() => {
                                  const newLocations = [...formData.jobPreferences.preferredLocations];
                                  newLocations.splice(index, 1);
                                  handleInputChange("jobPreferences", "preferredLocations", newLocations);
                                }}
                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                              >
                                <X size={16} />
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          onClick={() => {
                            const newLocations = [...formData.jobPreferences.preferredLocations, ""];
                            handleInputChange("jobPreferences", "preferredLocations", newLocations);
                          }}
                          className="w-full py-2 border border-dashed border-gray-300 text-gray-500 rounded-lg hover:border-gray-400 hover:text-gray-600 flex items-center justify-center gap-2"
                        >
                          + Add Location
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expected Salary (LPA)</label>
                      <input
                        type="text"
                        value={formData.jobPreferences.expectedSalary}
                        onChange={(e) => handleInputChange("jobPreferences", "expectedSalary", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Types</label>
                      <div className="space-y-2">
                        {["full-time", "part-time", "remote", "contract"].map((type) => (
                          <label key={type} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.jobPreferences.jobTypes.includes(type)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  handleInputChange("jobPreferences", "jobTypes", [...formData.jobPreferences.jobTypes, type]);
                                } else {
                                  handleInputChange("jobPreferences", "jobTypes", formData.jobPreferences.jobTypes.filter(t => t !== type));
                                }
                              }}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="capitalize">{type.replace("-", " ")}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Notice Period</label>
                      <select
                        value={formData.jobPreferences.noticePeriod}
                        onChange={(e) => handleInputChange("jobPreferences", "noticePeriod", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Immediate">Immediate</option>
                        <option value="15 days">15 days</option>
                        <option value="30 days">30 days</option>
                        <option value="60 days">60 days</option>
                        <option value="90 days">90 days</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-200">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2">
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Communication Settings */}
          {activeSection === "communication" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-semibold mb-2">Communication Settings</h1>
                <p className="text-gray-600">Set your language and timezone preferences</p>
              </div>

              <div className="bg-white rounded-xl p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                    <select
                      value={formData.communication.language}
                      onChange={(e) => handleInputChange("communication", "language", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                    <select
                      value={formData.communication.timezone}
                      onChange={(e) => handleInputChange("communication", "timezone", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Asia/Kolkata">India (GMT+5:30)</option>
                      <option value="America/New_York">Eastern Time (GMT-5)</option>
                      <option value="Europe/London">London (GMT+0)</option>
                      <option value="Australia/Sydney">Sydney (GMT+10)</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-200">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2">
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Security Settings */}
          {activeSection === "security" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-semibold mb-2">Security Settings</h1>
                <p className="text-gray-600">Manage your account security and login preferences</p>
              </div>

              <div className="bg-white rounded-xl p-6 space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Active Sessions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Smartphone size={20} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Chrome on Windows</p>
                          <p className="text-sm text-gray-500">Mumbai, India • Last active 2 hours ago</p>
                        </div>
                      </div>
                      <button className="text-red-600 hover:bg-red-50 px-3 py-1 rounded-lg text-sm font-medium">
                        Sign Out
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Smartphone size={20} className="text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">App on iPhone</p>
                          <p className="text-sm text-gray-500">Ahmedabad, India • Last active 1 day ago</p>
                        </div>
                      </div>
                      <button className="text-red-600 hover:bg-red-50 px-3 py-1 rounded-lg text-sm font-medium">
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-200">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2">
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Help & Support */}
          {activeSection === "help" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-semibold mb-2">Help & Support</h1>
                <p className="text-gray-600">Find answers to common questions or contact our support team</p>
              </div>

              <div className="bg-white rounded-xl p-6 space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-3">
                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-medium cursor-pointer">How do I update my profile?</summary>
                      <p className="mt-2 text-gray-600">To update your profile, go to the Profile Dashboard and click on the edit icon next to any section you want to modify.</p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-medium cursor-pointer">How can I make my profile more visible to recruiters?</summary>
                      <p className="mt-2 text-gray-600">You can increase your profile visibility by completing all sections, adding relevant skills, and keeping your profile updated with recent experience.</p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-medium cursor-pointer">How do I delete my account?</summary>
                      <p className="mt-2 text-gray-600">To delete your account, go to Settings, Privacy and click on the "Delete Account" button. Please note this action is irreversible.</p>
                    </details>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Contact Support</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <Mail size={20} className="text-blue-600" />
                      <div className="text-left">
                        <p className="font-medium">Email Support</p>
                        <p className="text-sm text-gray-500">support@jobportal.com</p>
                      </div>
                    </button>

                    <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <Smartphone size={20} className="text-blue-600" />
                      <div className="text-left">
                        <p className="font-medium">Phone Support</p>
                        <p className="text-sm text-gray-500">+91 12345 67890</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Password Change Modal */}
      {editSection === "password" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Change Password</h2>
              <button
                onClick={() => setEditSection(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setEditSection(null)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => setEditSection(null)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle size={24} className="text-red-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Delete Account</h2>
                <p className="text-sm text-gray-500">This action cannot be undone</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Are you sure you want to delete your account? All your data, including profile information, job applications, and saved jobs will be permanently deleted.
            </p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Please type "DELETE" to confirm
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type DELETE"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}