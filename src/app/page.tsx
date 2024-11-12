'use client'
import { TelosCard } from "@/components/TelosCard";
import { TaikoCard } from "@/components/TaikoCard";
import { useState, ChangeEvent } from "react";

export default function Home() {
  const [images, setImages] = useState<(string | null)[]>([null, null]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const updatedImages = [...images];
          updatedImages[index] = reader.result;
          setImages(updatedImages);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Upload and Display Two Images</h1>

        <div className="flex justify-center my-10">
          <div>
            <label>
              Image A:
              <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, 0)} />
            </label>
          </div>
          <div>
            <label>
              Image B:
              <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, 1)} />
            </label>
          </div>
        </div>
      </div>
      <div className="w-full justify-evenly flex">
        <div className="bg-[#0b1837] rounded-[15px]">
          <TelosCard img={images}/>
        </div>
        <div className="bg-[#f8f8f8] text-black rounded-[15px]">
          <TaikoCard img={images}/>
        </div>
      </div>
    </div>
  );
}
