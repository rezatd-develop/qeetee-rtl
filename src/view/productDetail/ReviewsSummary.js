import Image from 'next/image'
import ratingImg from '../../files/images/elements/rating.png';
import PrimarySelect from '@/src/components/select/PrimarySelect';
import CustomSelect from '@/src/components/select/SeconarySelect';


export default function ReviewsSummary() {
  return (
    <div>
      <p className="fw-bold font-size-875">Average Customer Ratings</p>
      <div className="d-flex align-items-center">
        <Image src={ratingImg} className="me-2" />
        <p className="mb-0 font-size-875">4.5</p>
      </div>
      <div className='d-flex justify-content-between align-items-center mt-3'>
        <div className='font-size-875'>
          1-3 of 6 Reviews
        </div>
        <div>
          <CustomSelect options={[{ id: 1, label: 'sort by Latest' }, { id: 2, label: 'Sort by Best' }]} />
        </div>
      </div>
    </div>
  )
}