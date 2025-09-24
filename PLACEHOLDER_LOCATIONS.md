# Placeholder Locations in Website Sections

## 🎯 SECTION 1: HERO SECTION
```jsx
{/* Hero background photo placeholder */}
<div className="text-center p-8 bg-vintage-cream/90 rounded-lg shadow-lg">
  <Camera size={48} className="mx-auto mb-4" />
  <p className="text-lg font-playfair">INSERT YOUR BEAUTIFUL HERO PHOTO HERE</p>
  <p className="text-sm text-vintage-sepia mt-2">Full-width background image of her</p>
</div>
```

## 🎯 SECTION 2: OUR STORY SECTION
```jsx
{/* Memory Photo Placeholders (3 total) */}
<div className="aspect-[4/3] bg-vintage-sepia/20 rounded-lg flex items-center justify-center">
  <div className="text-center">
    <Camera size={48} className="mx-auto mb-4" />
    <p className="font-playfair text-lg">ADD A PHOTO OF OUR MEMORY HERE</p>
    <p className="text-sm text-vintage-sepia mt-2">(Memory #1, #2, #3)</p>
  </div>
</div>

{/* Memory Story Placeholders (3 total) */}
<p className="font-playfair text-lg text-vintage-sepia/70 italic">
  [WRITE THE STORY OF THIS MEMORY HERE]
</p>
```

## 🎯 SECTION 3: GALLERY SECTION
```jsx
{/* 15 Photo Placeholders in Grid */}
{Array.from({ length: 15 }, (_, index) => (
  <div key={index} className="vintage-photo-frame group">
    <div className="aspect-square bg-vintage-sepia/20 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <Camera size={24} className="mx-auto mb-2" />
        <p className="text-xs font-playfair">Photo {index + 1}</p>
      </div>
    </div>
  </div>
))}
```

## 🎯 SECTION 4: PERSONAL LETTER SECTION
```jsx
{/* Personal Message Placeholder */}
<div className="bg-vintage-cream/50 p-6 rounded border-l-4 border-vintage-gold">
  <p className="font-playfair text-lg italic">
    [WRITE YOUR PERSONAL BIRTHDAY MESSAGE TO HER HERE]
  </p>
</div>

{/* Name Placeholder */}
<p className="font-dancing text-lg text-vintage-sepia mt-2">
  [Your name]
</p>
```

## 🎯 SECTION 5: WELL WISHES SECTION
```jsx
{/* 6 Wish Card Placeholders */}
{Array.from({ length: 6 }, (_, index) => (
  <div key={index} className="vintage-note group">
    <div className="bg-vintage-cream p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <p className="font-playfair text-base text-vintage-sepia/70 italic">
          [INSERT A WISH FROM A FRIEND/FAMILY MEMBER HERE]
        </p>
      </div>
      <div className="text-right">
        <p className="font-dancing text-lg text-vintage-burgundy">
          - [Name]
        </p>
      </div>
    </div>
  </div>
))}
```

## 📍 Quick Reference:
- **Hero**: 1 background photo
- **Our Story**: 3 photos + 3 stories  
- **Gallery**: 15 photos
- **Letter**: 1 personal message + your name
- **Wishes**: 6 wishes + 6 names
- **Total**: 20 photos + 4 text sections + 6 wishes + 7 names