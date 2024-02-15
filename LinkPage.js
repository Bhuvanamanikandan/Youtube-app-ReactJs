import React, { useState } from 'react';

function LinkPage() {
  const [links, setLinks] = useState([]);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [currentVideoId, setCurrentVideoId] = useState('');
  const [formPosition, setFormPosition] = useState('center');

  const handleNameChange = (e) => setName(e.target.value);
  const handleUrlChange = (e) => setUrl(e.target.value);

  const addLink = () => {
    if (name && url) {
      const videoId = extractVideoId(url);
      const newLink = { name, url, videoId };
      setLinks([...links, newLink]);
      setName('');
      setUrl('');
      setFormPosition('right');
    }
  };

  const playVideo = (videoId) => {
    setCurrentVideoId(videoId);
  };

  const extractVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', paddingTop: '20px' }}>
      <div style={{ flex: 1 }}>
        {links.map((link, index) => (
          <div key={index} style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => playVideo(link.videoId)}>
        
            <img src={`https://img.youtube.com/vi/${link.videoId}/0.jpg`} alt={link.name} style={{ width: '100px', height: 'auto' }} />
            <p>{link.name}</p>
          </div>
        ))}
      </div>
      <div style={{ width: '300px', position: formPosition === 'right' ? 'absolute' : 'static', right: '10px' }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          style={{ borderRadius: '15px', padding: '10px', border: '1px solid #ccc', marginBottom: '10px', width: '100%' }}
        />
        <input
          type="text"
          placeholder="Link URL"
          value={url}
          onChange={handleUrlChange}
          style={{ borderRadius: '15px', padding: '10px', border: '1px solid #ccc', marginBottom: '10px', width: '100%' }}
        />
        <button onClick={addLink} style={{ backgroundColor: 'blue', color: 'white', borderRadius: '15px', padding: '10px', border: 'none', cursor: 'pointer', width: '100%' }}>
          Add
        </button>      </div>
      {currentVideoId && (
        <div style={{ flex: 2 }}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${currentVideoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style={{ maxWidth: '100%', maxHeight: '500px' }}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default LinkPage;
