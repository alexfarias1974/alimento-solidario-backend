import AppDataSource from "../../data-source";
import { Donation } from "../../entities/donations.entity";
import AppError from "../../errors/appError";
import { IDonationUpdate } from "../../interfaces/donations";

const updateDonationService = async (id: string, updateDonationData: IDonationUpdate): Promise<Donation> => {
  const donationsRepository = AppDataSource.getRepository(Donation);
  const donationFound = await donationsRepository.findOne({
    where: {
      id,
    },
  });

  if (!donationFound) {
    throw new AppError("Donation not found!");
  }

  await donationsRepository
    .update(donationFound!.id, {
      food: updateDonationData.food,
      quantity: updateDonationData.quantity,
      available: updateDonationData.available,    
    })
  
  const donationUpdated = await donationsRepository.findOne({
    where: {
      id,
    },
  });

  return donationUpdated!
};

export default updateDonationService;


