import React from 'react';

interface AvatarGroupProps {
  avatarImages: string[];
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatarImages }) => {
  return (
    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
      {avatarImages.map((image, index) => (
        <div key={index} className="avatar">
          <div className="w-12">
            <img src={image} alt={`Avatar ${index}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

const TestimonialCard: React.FC = () => {
  const avatarImages = [
    'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
  ];

  return (
    <div>
      <AvatarGroup avatarImages={avatarImages} />
      {/* Other content */}
    </div>
  );
};

export default TestimonialCard;
