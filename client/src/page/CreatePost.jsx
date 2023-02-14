import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const promptPlaceHolder =
    "3D render of a cute tropical fish in an aquarium on a dark blue background, digital art";
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch("https://ai-image-app-ughm.onrender.com/api/v1/dalle", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();

        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    }
  };

  const handleSharePost = async (e) => {
    e.preventDefault();
    if (form.prompt && form.photo) {
      setLoading(true);

      try {
        const response = await fetch("https://ai-image-app-ughm.onrender.com/api/v1/post", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({...form}),
        });

        await response.json();
        alert('Success')
        navigate('/')
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please generate an image")
    }
  };
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-h-7xl mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="bg-[200%] bg-clip-text text-transparent bg-gradient-to-r from-blue-light to-blue animate-move">
          Create Imagination.
        </h1>
        <p className="w-full max-w-[900px] text-center">
          Create imaginative and visually stunning images through DALL-E AI and
          share them with community.
        </p>
      </div>
      <form
        className="mt-8 grid grid-cols-1 grid-rows-1 lg:grid-cols-2 gap-10"
        onSubmit={handleSharePost}
      >
        <div className="grid grid-cols-1 gap-6 mb-2">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="John Smith"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder={
              form.prompt.length === 0 ? promptPlaceHolder : form.prompt
            }
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="w-full">
            <button
              type="button"
              onClick={handleGenerateImage}
              className="px-4 py-2 w-full text-sm bg-blue-light/90 rounded-md text-white font-bold tracking-wider hover:bg-blue-light/10 hover:text-blue-light hover:scale-105 transition duration-200"
            >
              {generatingImg ? "Generating..." : "Generate Image"}
            </button>
          </div>
          <hr />
          <div className="">
            <p>
              Once you have created the image share it with the community and
              download a high-resolution image.
            </p>
            <button
              type="submit"
              className="px-4 py-2 mt-4 w-full text-sm bg-blue-dark/70 rounded-md text-white font-bold tracking-wider hover:bg-blue-dark/10 hover:text-blue-dark hover:scale-105 transition duration-200"
            >
              {loading ? "Sharing..." : "Share with the community"}
            </button>
          </div>
        </div>

        {/* //Image Container */}
        <div className="relative flex-1 mt-4 lg:mt-0 border-grey border-[1px] text-sm rounded-lg focus:ring-grey focus:border-grey flex justify-center items-center">
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.prompt}
              className="w-[full] h-[full] object-contain"
            />
          ) : (
            <img
              src={preview}
              alt="Preview"
              className="w-9/12 h-9/12 object-contain opacity-40"
            />
          )}

          {/* //Loading */}
          {generatingImg && (
            <div className="absolute inset-0 z-0 flex justify-center items-center bg-black/50 rounded-lg]">
              <Loader />
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
