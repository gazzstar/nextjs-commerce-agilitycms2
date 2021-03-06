import React, { FC } from 'react'
import { Hero } from '@components/ui'
import { URLField } from "@agility/nextjs"
import { Module } from '@agility/nextjs'


interface Fields {
	title:string,
	description:string
	cTA?:URLField
}

const HeroModule:Module<Fields> = ({ module: {fields }}) => {

	return (
		<Hero
			headline={fields.title}
			description={fields.description}
			ctaText={fields.cTA?.text || ""}
			ctaUrl={fields.cTA?.href || ""}
      />
	)
}

export default HeroModule

