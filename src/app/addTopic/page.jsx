"use client";
import 'animate.css';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      console.log("clicked error")
      Swal.fire({
        title: 'Are you fool babes',
        showClass: {
          popup: 'animate__animated animate__hinge'
        },
        hideClass: {
          popup: 'animate__animated animate__rollIn'
        }
      })
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        Swal.fire({
          title: 'Yo babes you made it',
          showClass: {
            popup: 'animate__animated animate__lightSpeedInRight'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border rounded-full border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border rounded-full border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-slate-600 transition-transform transform duration-500 hover:scale-105 hover:border hover:shadow-lg hover:shadow-black hover:border-slate-500 hover:bg-white hover:text-black rounded-full font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}