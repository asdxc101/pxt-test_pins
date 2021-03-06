/**
 * Functions are mapped to blocks using various macros 
 * in comments starting with % (e.g., //% block).
 * The most important macro "block" specifies that a
 * block should be generated for a **exported** function.
 */
//% block="pxt-test_pins" color="#AA278D"
namespace pxt-test_pins {

    //% weight=20
	//% blockId=digital_writepin
	//% block="digital write pin |%tname| to |%tvalue"
	//% tname.fieldEditor="gridpicker"
	//% fieldOptions.columns=3
	//% tvalue.defl=0
	//% tvalue.min=0
	//% tvalue.max=1
	export function digital writepin(tname:DigitalPin, tvalue: number):void {pins.digitalwritepin(tname, tvalue)
	}
}
