import { getBookedDatesByCabinId, getCabin } from '@/app/_lib/data-service';

export async function GET(_, { params }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json({ cabin, bookedDates });
  } catch (error) {
    return Response.json({ message: 'Cabin could not be found' });
  }
}

export function POST(request) {
  console.log(request);

  return Response.json({ test: 'test' });
}
