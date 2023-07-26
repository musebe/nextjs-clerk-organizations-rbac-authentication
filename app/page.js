'use client';

import extractMembershipRole from '../utils/membershipHelper';
import { useOrganizationList } from '@clerk/nextjs';

import { Hero } from "@components";


export default function Home() {

  const { organizationList } = useOrganizationList();

  const membershipRole = extractMembershipRole(organizationList);

  console.log('Organization', membershipRole);
  return (
    <main className='overflow-hidden'>
      <Hero/>
    </main>
  );
}
