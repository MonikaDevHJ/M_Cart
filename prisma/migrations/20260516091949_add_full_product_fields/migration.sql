-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "gstNumber" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "sellerDesc" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productSize" TEXT NOT NULL,
    "selectCategory" TEXT NOT NULL,
    "stockQuantity" INTEGER NOT NULL,
    "brandName" TEXT NOT NULL,
    "selectSize" TEXT NOT NULL,
    "productImage" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
