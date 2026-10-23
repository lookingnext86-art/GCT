import React, { useEffect, useRef, useState } from 'react';
import { ImagePlus, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { api, errorText } from '../../lib/adminApi';

const CoverUploader = ({ article, onUploaded }) => {
  const [src, setSrc] = useState(null);
  const [busy, setBusy] = useState(false);
  const input = useRef(null);

  useEffect(() => {
    if (!article.cover_image_path) return setSrc(null);
    let url;
    api.get(`/admin/articles/${article.id}/image`, { responseType: 'blob' }).then((r) => {
      url = URL.createObjectURL(r.data);
      setSrc(url);
    });
    return () => url && URL.revokeObjectURL(url);
  }, [article.id, article.cover_image_path]);

  const upload = async (file) => {
    if (!file) return;
    setBusy(true);
    const form = new FormData();
    form.append('file', file);
    try {
      await api.post(`/admin/articles/${article.id}/image`, form);
      toast.success('Cover photo added');
      onUploaded();
    } catch (err) {
      toast.error(errorText(err));
    } finally {
      setBusy(false);
      input.current.value = '';
    }
  };

  return (
    <div data-testid="cover-uploader">
      <p className="text-xs font-semibold text-gray-500 mb-2">Cover photo {!src && <span className="text-amber-600">(required to publish)</span>}</p>
      <button type="button" onClick={() => input.current.click()} disabled={busy} data-testid="cover-upload-btn"
        className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border-2 border-dashed border-gray-200 hover:border-[#4dd4ac] bg-[#f4f7f6] flex items-center justify-center transition-colors">
        {src && <img src={src} alt={article.image_alt || ''} className="absolute inset-0 w-full h-full object-cover" data-testid="cover-preview" />}
        <span className={`relative z-10 inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full ${src ? 'bg-black/55 text-white' : 'text-[#0f4f47]'}`}>
          {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImagePlus className="w-4 h-4" />}
          {busy ? 'Uploading…' : src ? 'Replace photo' : 'Upload photo'}
        </span>
      </button>
      <input ref={input} type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={(e) => upload(e.target.files[0])} data-testid="cover-file-input" />
      <p className="text-[11px] text-gray-400 mt-2">JPG, PNG or WebP. Saved as an optimized WebP named after the article.</p>
    </div>
  );
};

export default CoverUploader;
