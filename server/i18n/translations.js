const Translations = {
  en: {
    auth: {
      tokenRequired: 'Token is required',
      invalidToken: 'Invalid token',
      loginSuccess: 'Login successful'
    },
    cart: {
      invalidProductId: 'Invalid product ID',
      productNotFound: 'Product not found',
      quantityExceedsStock: 'Quantity exceeds available stock',
      productAddedToCart: 'Product added to cart',
      productUpdated: 'Product quantity updated',
      productRemovedFromCart: 'Product removed from cart',
      itemNotFound: 'Item not found in cart',
      quantityMustBeNumber: 'Quantity must be a number',
      quantityRequired: 'Quantity is required',
      quantityMustBeGreaterThanZero: 'Quantity must be greater than zero'
    },
    order: {
      orderPlaced: 'Order placed successfully',
      invalidOrderData: 'No valid products found in the order'
    }
  },
  ar: {
    auth: {
      tokenRequired: 'الرمز مطلوب',
      invalidToken: 'رمز غير صالح',
      loginSuccess: 'تم تسجيل الدخول بنجاح'
    },
    cart: {
      invalidProductId: 'معرف المنتج غير صالح',
      productNotFound: 'المنتج غير موجود',
      quantityExceedsStock: 'الكمية تتجاوز المخزون المتاح',
      productAddedToCart: 'تمت إضافة المنتج إلى السلة',
      productUpdated: 'تم تحديث كمية المنتج',
      productRemovedFromCart: 'تم حذف المنتج من السلة',
      itemNotFound: 'العنصر غير موجود في السلة',
      quantityMustBeNumber: 'يجب أن تكون الكمية رقماً',
      quantityRequired: 'الكمية مطلوبة',
      quantityMustBeGreaterThanZero: 'يجب أن تكون الكمية أكبر من صفر'
    },
    order: {
      orderPlaced: 'تم تقديم الطلب بنجاح',
      invalidOrderData: 'لم يتم العثور على منتجات صالحة في الطلب'
    }
  }
};

export default Translations;
