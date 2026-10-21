import fitz  # PyMuPDF
import os

pdf_path = "แบบฟอร์มเชิดชูเกียรติปอ.pdf"
output_dir = "public/images"
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"Total pages: {len(doc)}")

img_count = 0
for page_num in range(len(doc)):
    page = doc[page_num]
    image_list = page.get_images(full=True)
    print(f"Page {page_num + 1} has {len(image_list)} images")
    for img_idx, img in enumerate(image_list):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        img_name = f"extracted_p{page_num + 1}_img{img_idx + 1}.{image_ext}"
        img_path = os.path.join(output_dir, img_name)
        with open(img_path, "wb") as f:
            f.write(image_bytes)
        print(f"Saved {img_path} ({len(image_bytes)} bytes)")
        img_count += 1

# Also render page 5 and page 6 at high DPI as full pages
for p in [4, 5]: # 0-indexed for page 5 and 6
    page = doc[p]
    pix = page.get_pixmap(dpi=200)
    pix.save(os.path.join(output_dir, f"award_page_{p+1}.png"))
    print(f"Rendered page {p+1} at 200 DPI")

print(f"Finished extracting {img_count} images.")
