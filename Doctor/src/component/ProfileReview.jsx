import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProfileReview = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className='py-10'>
        <Slider {...settings} className=''>
        <div className='w-100 h-100 bg-gray-100 rounded-lg p-4'>
          <p className='italic'>"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. "</p>
            <div className='grid items-center justify-center py-10'>
              <img className='rounded-full w-24 h-24' src="https://images.unsplash.com/photo-1710900791793-487f655010f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <p className='font-semibold text-blue-600'>- Karan Suryawanshi</p>
            </div>
          </div>
          <div className='w-100 h-100 bg-gray-100 rounded-lg p-4'>
            <p className='italic'>"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. "</p>
            <div className='grid items-center justify-center py-10'>
              <img className='rounded-full w-24 h-24' src="https://images.unsplash.com/photo-1710900791793-487f655010f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <p className='font-semibold text-blue-600'>- Karan Suryawanshi</p>
            </div>
          </div>
          <div className='w-100 h-100 bg-gray-100 rounded-lg p-4'>
            <p className='italic'>"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. "</p>
            <div className='grid items-center justify-center py-10'>
              <img className='rounded-full w-24 h-24' src="https://images.unsplash.com/photo-1710900791793-487f655010f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <p className='font-semibold text-blue-600'>- Karan Suryawanshi</p>
            </div>
          </div>
        </Slider>
      </div>
      <div>
        <div className='flex item-center justify-between pb-8'>
          <img className='w-28 h-8' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAA8CAYAAADc3IdaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU5MUMzRTE0NTZFRTExRUI5RTNDQTg1MjE2NzU4NThFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU5MUMzRTE1NTZFRTExRUI5RTNDQTg1MjE2NzU4NThFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTkxQzNFMTI1NkVFMTFFQjlFM0NBODUyMTY3NTg1OEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTkxQzNFMTM1NkVFMTFFQjlFM0NBODUyMTY3NTg1OEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5zv56LAAAEGklEQVR42uyd23HjMAwADY+7TAEpIHWkgBSQOnH36cnNxZII4rk7k484pvgS1pBFMaKqNwCACjyiG/D59W1xmGfrSsHyACX5eH9zre/eYMz0xe/ZywPAEGHpydezlQeAIcLS4n8HgCHCUoP3yUJ5NW4nADQVlhq+/4q0dHN7AaCJsHRDuTPSUud2A0BRYenG8hJcPwA0EpY6HEcK9QMAYRWWlZwQzi5pHW0D0gJoKqyjsjorHGtpnW0D0gJoJqyzsoqS1tU2IC2AJsK6KivLelaPj7QABghrVVbR67SQFsAQYXnLCmkBFOKRqC1RsnouL7/Uq4HlvcZ35+X3lXbIhuOLcbnIvlrE0HK/P7++X9b78f5mcg5lybCiZUWm9bpdGnAMNaq7wnit9jNkjI7IqtsloYesPNdpdb48vBpU6nSedBF7hbEJ+SAJFdZBO1vI6mzajbRs2md9UmuDMbEet1Hff4YJK0BWSMs3QLWAGLK3Keuea2FzECKsQFlZTgzS6ieIrpeqZFiFZcU6rf3BqkNEoc3HON24uwqroKyQFhkHY5oIt3VYhWX1XL7zOq2f4+cVJLIwTx5jYnU+ifH5eLVeF6zWXYVkWA1kNTHT8lgoKSder4pVP9VpDtPKykVYhWTF3UO/9ojTfGSQVUqpVGWrsArKCmntryc6QNWgn1pkTNqtfr9HNvpF6hiVWSGtPZlptkDe/diP5/eN2bLGWhlWYVlNl1b1IK4MWVaEsBrIikyLwO/W15BL2B3SunN+AyDBKpgL68gtzRfm9chKjnzqWGRqVR5B8grkimuPsstqVJa1JcNqIC1kBd5k2WBxVobVQFrIam+QqGMQS2D5CbtKuJ+DW7/DOrjiNZO0kFWeE9X75smOY3ruaZV2VbvlZeE9Q4eSSQtZXc86zoy1OmcCYvg+K/HqLcd6Ny4Ji0pruqx+e+ZtR936n59uWPfzZ3mvcfun3rZ7ujeQ1pTMShYl5ZkJVLpD6iGQ7vX6rsMqLC3uBuZDBrWh9Pxb7t5wT9r4TNJCVsMCrPFYlp+XkJXuTb7TQlZxbRf6OZOwR3OK3z1EVnEBJ/SzzrhZb+YX+ixhUWkhq5hAyb4Tqdx87kaPlVW4sBylYyUtZBUTzFKsr5mk3Gqb5EeiSY78Jw5Hyq+eHNGyynZXTQPaK036KYbHFct6d+7nnklYHaRFZtU3a8rYzxQ7jv4VlGvl94KTO22dFgAkFVZFaSErgMHCspDObbF8hnVaAFBEWCvSstpvKXKdFgAUE9YVaV3JurKt0wKAosI6I63V7TospIWsAIYLyyvIo/fTAoAmwrII9sz7aQFAM2GtBL0ESwtZAQwU1pXgl+BMC1kBDBbWGQlI8OUhsgJAWIdkkP3vADBIWKsZVIbyAHCCPwIMANvv0fF1xef1AAAAAElFTkSuQmCC" alt="" />
          <img className='w-28 h-8' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAA8CAYAAADc3IdaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYxMTc1N0IwNTZFRTExRUJBRUFDRDkwRjEzNkNFOTQyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYxMTc1N0IxNTZFRTExRUJBRUFDRDkwRjEzNkNFOTQyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjExNzU3QUU1NkVFMTFFQkFFQUNEOTBGMTM2Q0U5NDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjExNzU3QUY1NkVFMTFFQkFFQUNEOTBGMTM2Q0U5NDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5qD4gfAAADnklEQVR42uyd623DMAwGQ8NbdoAO0Dk6QAfonGz7LyiCPGyR4kfdAQGaAjFlWTxTfpq7XwAAFNhnN+Dz61u1765NbwwlWJGP97fUeBtdflpWt74DAMIqKSukBYCwpGSFtAAQlpSskBYAwpKSFdICQFhSskJaAAhLSlbXv0dcAAirvKyotgAGs9MFaYL5W6YNjMnFqkCFBaHVEJUWAMKSEgrSAkBYUiJBWgAIK1Ugdjl3HAlpASCsNFnd+htpASCssrJCWgAIS0pWSAsAYUnJaoS0AABhhcnKL7dvvUFaAAirnKzufUdaAAGsdGtOlKyu////7CHHpsZvMxOMQZ8jrFKyWkFaI9fDTsQa9fKP0TF84PqP7H8bsOwyL1xZYUqYJSumh+cT6NXH8Rx5fE9GjGeX6YL5MbXN3YWVLSukVaOCi4jhgW1ysT6fJq2NBBguK6TVU3bd1sEV+3xjAIfICmm9Nh30hG3uBZKcPENYZWWFtJBA1b6Q7fONDR4qK6SVu84ZL7n1gmN4GToJq6qsukjL7nyy4qrHmLF9Qvvj8+s7VbBdhFVdVqtXWiaS9NExTDBXSo3RDsJSkdVoablw/z/7W0toX3ZCWvFtW3onqi4sNVl1lVZmAlSosryzFBAWsuoqLW8yLjrgNz7t2IU3Tras7v3+6LJH3Xv46J2HAGcrwhICVKyw1CurlaaHSBSWFlY3WSlLi+uFAGEtKKuulRbVFSwrrO6yUpMW1RVMQeGge9UbmaMSuMOBeKqrXpTZQe0NO0qxsoqS1orV1aqyXGK99+JJW0lWEZc1REtrRpVlxcbF0X6LXEem1Aepegxr1crqUfutWXJYgbZXfHAeU2ohYSGrutJywbFRKUaFMfnqTqJUHk2bEg58LEVnWY2eHmbszUdPp7pUWbPO3Ibu4D7e31KrwSkVFrKaVmmdGZxR/WoJy7Ki7WU6WL3CEpaVT0jmiErrmeVCzenayDiSO/at0YZd5czLjIcAukCiWoEYCLaTsAZVVyvLKlJanGpfK/lNrL25wkJWstJygQSyQjGOLFftjoRplWaKsJAVlVZQ8h5J9owY1UV1ZsxMbbPKA/ysYucV7iufOKBHxoy8FGN0DOWzh/Zgh1Umz1KEde9ajd/qC8VoDe5u68FOT6g/NrYPAKiAsABAp/xzjz/Gmv12WADIJ+M2nXBhISsAxCVVYT0QGlsYQFdOqfE4hgUAMgyvsJgCAkDU9PBHgAEAQaI2G54E370AAAAASUVORK5CYII=" alt="" />
          <img className='w-28 h-8' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAA8CAYAAADc3IdaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYxMTc1N0IwNTZFRTExRUJBRUFDRDkwRjEzNkNFOTQyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYxMTc1N0IxNTZFRTExRUJBRUFDRDkwRjEzNkNFOTQyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjExNzU3QUU1NkVFMTFFQkFFQUNEOTBGMTM2Q0U5NDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjExNzU3QUY1NkVFMTFFQkFFQUNEOTBGMTM2Q0U5NDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5qD4gfAAADnklEQVR42uyd623DMAwGQ8NbdoAO0Dk6QAfonGz7LyiCPGyR4kfdAQGaAjFlWTxTfpq7XwAAFNhnN+Dz61u1765NbwwlWJGP97fUeBtdflpWt74DAMIqKSukBYCwpGSFtAAQlpSskBYAwpKSFdICQFhSskJaAAhLSlbXv0dcAAirvKyotgAGs9MFaYL5W6YNjMnFqkCFBaHVEJUWAMKSEgrSAkBYUiJBWgAIK1Ugdjl3HAlpASCsNFnd+htpASCssrJCWgAIS0pWSAsAYUnJaoS0AABhhcnKL7dvvUFaAAirnKzufUdaAAGsdGtOlKyu////7CHHpsZvMxOMQZ8jrFKyWkFaI9fDTsQa9fKP0TF84PqP7H8bsOwyL1xZYUqYJSumh+cT6NXH8Rx5fE9GjGeX6YL5MbXN3YWVLSukVaOCi4jhgW1ysT6fJq2NBBguK6TVU3bd1sEV+3xjAIfICmm9Nh30hG3uBZKcPENYZWWFtJBA1b6Q7fONDR4qK6SVu84ZL7n1gmN4GToJq6qsukjL7nyy4qrHmLF9Qvvj8+s7VbBdhFVdVqtXWiaS9NExTDBXSo3RDsJSkdVoablw/z/7W0toX3ZCWvFtW3onqi4sNVl1lVZmAlSosryzFBAWsuoqLW8yLjrgNz7t2IU3Tras7v3+6LJH3Xv46J2HAGcrwhICVKyw1CurlaaHSBSWFlY3WSlLi+uFAGEtKKuulRbVFSwrrO6yUpMW1RVMQeGge9UbmaMSuMOBeKqrXpTZQe0NO0qxsoqS1orV1aqyXGK99+JJW0lWEZc1REtrRpVlxcbF0X6LXEem1Aepegxr1crqUfutWXJYgbZXfHAeU2ohYSGrutJywbFRKUaFMfnqTqJUHk2bEg58LEVnWY2eHmbszUdPp7pUWbPO3Ibu4D7e31KrwSkVFrKaVmmdGZxR/WoJy7Ki7WU6WL3CEpaVT0jmiErrmeVCzenayDiSO/at0YZd5czLjIcAukCiWoEYCLaTsAZVVyvLKlJanGpfK/lNrL25wkJWstJygQSyQjGOLFftjoRplWaKsJAVlVZQ8h5J9owY1UV1ZsxMbbPKA/ysYucV7iufOKBHxoy8FGN0DOWzh/Zgh1Umz1KEde9ajd/qC8VoDe5u68FOT6g/NrYPAKiAsABAp/xzjz/Gmv12WADIJ+M2nXBhISsAxCVVYT0QGlsYQFdOqfE4hgUAMgyvsJgCAkDU9PBHgAEAQaI2G54E370AAAAASUVORK5CYII=" alt="" />
          <img className='w-28 h-8' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAA8CAYAAADc3IdaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg4NjY2NjdBNTZFRTExRUI4MDUyODQ3MUFCQTREODYxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg4NjY2NjdCNTZFRTExRUI4MDUyODQ3MUFCQTREODYxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODg2NjY2Nzg1NkVFMTFFQjgwNTI4NDcxQUJBNEQ4NjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODg2NjY2Nzk1NkVFMTFFQjgwNTI4NDcxQUJBNEQ4NjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4WskEoAAAFGElEQVR42uyd200mMQyFf0fTJQVQAHVQAAVsnV7tAxKLlv0ziS/HzjkST0AujvONncwkoqoPiqKoCrp2C3j/+IXQj0/qCoeUouro7fXl1t+PBn1miEhRh6g6sL7CitEVRRFYhBWjTooisAirM2GlBCp1ErAIq9qw4rhRy7oKT0g6/c+gom0oRliEFWHVOPqjCCzCirCiqLNSQsJqLlqhbQhwRliHwKrSzhVhNW8XpqEEVktYVXHwLrDSpnVRhwJLjcrQhXoU1B7dIisNLIvQaqKrgCPLZhn6Qxn65P8FfGJXg5UUB4cG2CcLtmV8aYA7hRg5li44gQLYogusomwsD67ntYUVGrC8YPX9d5o4oSzq5YRcm4RarL0UMLC8YbXjtNELxJ6w0v/83G3L3b/ztq8E+ufXaG72xzqKtKhXbvjHrN/cKu/949et8b8OgtVuGyXYDlaTUUFs+NkPdSp3NsoW4/oix1ZAfCpN2cBSkDIyoaXGThoJcSRFtacKrBBsIc9s8Pb6cqtfF5iDSaKTzjz9raGlCU66s76Dug7EdtmAUpz8UowyqbQ1LCRYfc31JajeO+tDls4qEzaopkgoCGhZ1lGdOLdnufwB4mBesBInY2qRCWbtqGhQW5mYCty2KuleWuQ4ABzMG1Yo0Mr8XtFyrWQnGot4u90jWrxbpiWssuuGUiSwIhfYBSzSiozITljP6f5CbaeozvQEjZFsSHFweNmoaxVaChhV7cDCemMhayJlpIVZfY2uN8WvM18cjYSVN7S+/1+V9M8r9ZsdN8t37hCiq45fKFi+A7htg5E8iJGwioIWt9jnoqpusDoRlOG+PpIMKcYG8VhM7Hh6ZQRQPUC1mvZp4GTrnArC+P5IMGQ2rE6Alkz0y2PCen8HOduG6Cf/yR+ra+TcGQkDiAArQgs/hb3z8MvsRyasIuuG8PsBOokiDRj1djsqtBBSRcRyq0I8Ay7Pzpsza88F5kDRsPpaXtdjdu+ckIB4M/PK0sLs95K734aelgqmnxo7gpxrZgCzYHXCWoPl29I7dXkvdEd+E3lKKggV6aIe4Jc1GN0XSL2hJca25OUReLC6G3iYtmkAGBIFVidBy3qn9uFU5rO6LL6R1ELQQE9B3R8wI7mhaLCqdKFqFLh208OofpyQClaL1M3tMRI7hwQrZFBJ0ISPfHJWuLUoOjLZ2fSRhn7vBizPix0EwFFOUZXNjMwoxgsaFaO6lLPTtoB198YLIFhVAZVs9E2LwSAiuhJgaPCqL5CUEAlWjKiw0qAObe1+mxIUZJeBtRBdZcEq6/uyqk9cadSX6tBGhlXKeA+QgbHuaFVInRbFqPEk9kgLq0IjCi6hD6MLaNJI88l5ekQiBccoa5E9u25Y310C1uJi+6PoAFSH1d3v5WbOkJLE9v2rjZLQlqxjltH8PrQtV7EJ2j3F89xssNrJWk21PUGoDrbUBuPeTgjA+u6sp647Rew2rb4gGjX5I6+bV2e4n6Dws+Iu4M4TVrGTUQ3KrxRBIF8aS2AWABZhZV/myi7cTPsqLqBTxaOrPxq0e+s0UDb/VzZ+T1EEFmFlDp7dthFavaMoiyidKSFBtV2vGraJ0Oqd7inK+BNYZ8CKkKFWYQXlRwQW4UBRZURgEVQUVca/lxbd315fOBGfDyRtRHWGUIp/L+8SEloEFXUktFJ9fOu1BkLrrwGkLaiufg3j45dRxz510o0zFEUVBJbXREaDHyFFUcn6LcAAvv2ohT8WPSgAAAAASUVORK5CYII=" alt="" />
          <img className='w-28 h-8' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAA8CAYAAADc3IdaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlBNEEyODNDNTZFRTExRUI5QTRCODUwQ0RFNkQyQ0VDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlBNEEyODNENTZFRTExRUI5QTRCODUwQ0RFNkQyQ0VDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUE0QTI4M0E1NkVFMTFFQjlBNEI4NTBDREU2RDJDRUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUE0QTI4M0I1NkVFMTFFQjlBNEI4NTBDREU2RDJDRUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4XZ5UvAAADM0lEQVR42uzd0Y3bMBBFUdNwly7ABbiOFJACUieTfCQwAmSzijnUcHgusH9riUNKV8+UTLXe+wUAVuB2dgO+fP32zsd/2bYFNS96+8DSPB/3qfu7Fum3vsg2AWwqrF50XwCKJ6zRUiEogLCWFgqJAYSVTirEBBBWiaRDZgBhpZEKIQGEVSrhkBpAWKdLhYgAwiqZbMgNIKzTpEJAAGGVTjQkBxDWdKkQD0BYWyQZsgMIa5pUCAcgrK0SDOkBhBUuFaIBCGvL5EJ+gIQVJhWCAQhr68RCgkAwt83qPSqVtoCI+sF6Rn12tLRHbr8N/mzWOkfv93BbPnqJzPNxH/7ylmuBEzD6jTYtqO27XwxW7btV65y+IMAPmQ2v9XrB6CsSWaFCf6Vs43XhTmoT5SJlzam3J+6/fln/RSefrWFY236mrJFJS8KSriQr/bfMmF4X7ah2gmSkrHk1ZkpafUKtWWoKa8uopCVhSVfAMmQR1qjb61JWzgvA659aC+0z4tEFCUu6AiSsZOlKygKKc9MF0pV+2a7WZes8VVgH7xq0g//bgwf8s9vvZHhKv5PVJGbOY5nD2ov+x9+KJ3H7jzr7gnVmHtPf+4v4+U1KYQWmq8tlztxR9bmslrxtbYM6pUgJq5RUHNjq3KrWU4QVnK6yHgTdgZ2qrWRFWMsnJSlrzZOx7XoC78Z0YRVKV1VTVg/Y3pFJYeQfUwkr0cA4qfSBMSWskumqasoiLdJKyc1g/HVbFec5jq7p7qFXY/rhPp+Pe01hFU5Xr22u+PQ7adVMWu2Mc/vdp+KvhQZAfPZVAsXHdIqwCjzVHtF2EgA2TVg7yBDYnvA5rITpykoO514kKl8EdrnA9ZfzW8JKkq6kLGAgI5ahCRVW4rkrq5LiyFi2JMdK1ov6FFntlLDe7SxSQXVZhbVp5AJ/YcJa4M6glIUzk1aVVUimyWqXhDWqw0gFO8hqWBsjlk4OuUuYLF31kwfdHcN6ssk8f5qi1qh13r0157j8WsKDaqXPtoT9sPJ0QnTb2j/ENPVgH/6VMPh3RdXXRve1E5gprE1SFoDVhSVdSVmAhCVlARgpLOlKygKi+S7AAGXxCMDjV0fjAAAAAElFTkSuQmCC" alt="" />
          <img className='w-28 h-8' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAA8CAYAAADc3IdaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkEwQURBNTAzNTZFRTExRUJBRTk3QTEyQzYzM0IwQ0U4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkEwQURBNTA0NTZFRTExRUJBRTk3QTEyQzYzM0IwQ0U4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTBBREE1MDE1NkVFMTFFQkFFOTdBMTJDNjMzQjBDRTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTBBREE1MDI1NkVFMTFFQkFFOTdBMTJDNjMzQjBDRTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz79OU7oAAADtElEQVR42uyd23GkMBBFuVvO0gE4AMfhAByA4+y1q/Znp2ZZJCT1Q+dU+cOeGQQacbgNAsvMDgCADLxk34CPz6+zl+/YWAwPqM7722uq9f1V+Lsw588DAMJaKhukBYCwAAAQ1oxURMoCQFgpZIW0ABAWAMDewrLkyweATYRlxdoBAEpCAEBYe6QrAHAm9a05H59f3HoDQMICAEBYpCsAIGEhKwCEVTFdPWIHJ+4BcqSNbA/wG1wKjtj41YnNgiVFG9gv9udzFrDfq/C0b9/fXlP05wvf35ABoMUyOBp2ajv5uyas17P3qOG91rgOmtS/vcJske6/lmcdr08JAtFElqokDJiuPJLLnWXogsxmlM+7ld300e7CCi4rS7QjqbOsso36ybMcteJ9t0/C2iARRT76z2xfjAEoI6xEpWAmadnA93mlHDn2HyCs4bLKPNC8U0fPSeOrErEbAlKAvlGisaWb31Uoql8llMOAGnnVUMf8RDhi51PHetvhfyGkdXxookRatr91XJSZAhI6YSW+/cbjaKvOI+esc0rV5kmpSBuXiTg3K2zCKlAKmvMAbD0K966vBvaRDs4PLZVZlgmj1UtCj1IwinhWCl1Jt9f7gHZ2cFDgfkJYxUpBr5QlBnW6A8uqW6ysUtlefR6WDRiEcl4Hj7ZHnYDOskPIcTn28AOZhDUwXdnAwZf1BHLG9bbk63X3ILdSXOkEyUx3iDbYq1xd1NF/5TalTBCWbynI4AFkjLCmiyqarDLOB5Nz+9WlJfqviLCyzQtZsOPvNmht4HJ2P6GtCz8IK7G0KpSCo3bQiuXLqhvfr/T/ipTV/dmfi1+DJ28PgSeOxi8FV82l6tl+79n80dKynfwetp/OxPTzWqSqJ+w5rGKl4d1yZlWqGiXcq+uiQH09u4/t6HsUNOUxCStNuorQL61PXZhdwow8x3Xns3Jot2cZp08w/U5QqQZk6KuEi1LW7rL638nXq6VQ65FbHSknciKu2BbCojRMI6rdUjUgLErBIjurBreNLBBtXWFNSlk7yuqOLDSx7ar3PCrgOEVYlIYpJCXn9jMK50weWrD9ImH9zcvGO3HkdDXyKZ4r1+tu23IcA7MlogXr/vhfpx+v8j4d95nCgMxyJcxBs29nPYYGIBXfsiJhrSwNs80jAYB+dr9KSLoCQFjICgAQFgBsTJWrhJ7/MRgASFhhQVYACAsAYA9hqVg7AEDCQlYACAuhAADCQoYAUFdYSrJMAEBYCAYAYVEKAkAAfgswAMknI4VwYGW/AAAAAElFTkSuQmCC" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProfileReview