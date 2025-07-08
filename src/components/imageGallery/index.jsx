// components/Gallery.js
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";
import ReactImageGallery from "react-image-gallery";
import LoadingSpinner from "../../components/loadingSpinner";
import "react-image-gallery/styles/css/image-gallery.css";
import "./index.scss";

const Gallery = ({ galleryID }) => {
  const [galleryData, setGalleryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryData = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "little-learners", galleryID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const formattedImages = data.images
            .map((imgStr) => {
              if (typeof imgStr === "string") {
                try {
                  const obj = {};
                  imgStr.split(", ").forEach((pair) => {
                    const [key, value] = pair.split(": ");
                    obj[key.trim()] = value.replace(/['"]/g, "");
                  });
                  return obj;
                } catch {
                  return null;
                }
              }
              return imgStr;
            })
            .filter(Boolean);
          setGalleryData({ ...data, images: formattedImages });
        } else {
          setGalleryData(null);
        }
      } catch (err) {
        console.error("Error fetching gallery:", err);
        setGalleryData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, [galleryID]);

  if (loading) return <LoadingSpinner />;
  if (!galleryData) return <p>Gallery not found.</p>;

  return (
    <div className="gallery-block">
      <h2>{galleryData.title}</h2>
      <ReactImageGallery
        items={galleryData.images}
        autoPlay
        lazyLoad={true}
      />
    </div>
  );
};

export default Gallery;
