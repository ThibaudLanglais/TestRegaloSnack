import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import ThemePickerItem from './ThemePickerItem';
import BottomSheet, { BottomSheetFlatList} from '@gorhom/bottom-sheet';
import { useDispatch } from 'react-redux';
import { switchTheme } from '../../redux/actions';
import { themes } from '../../redux/themeReducer';
import styled, { useTheme } from 'styled-components';
import { softShadow } from '../../styles/styledMixins';

const ThemePicker = forwardRef((_props, ref) => {

    const theme = useTheme();
    const dispatch = useDispatch();
    const sheetRef = useRef(null);
    const snapPoints = useMemo(() => ["40%", "90%"], []);
    const handleSheetChange = useCallback((index) => {
        // console.log("handleSheetChange", index);
    }, []);

    useImperativeHandle(ref, ()=>({
        show() {
            sheetRef.current?.snapToIndex(0);
        }
    }))

    const updateTheme = (theme) => {
        dispatch(switchTheme(theme));
        // setTimeout(() => {
        //     sheetRef.current?.close()
        // }, 250);
    }

    return (
        <ThemesDrawer
            ref={sheetRef}
            snapPoints={snapPoints}
            index={-1}
            onChange={handleSheetChange}
            enablePanDownToClose
            enableHandlePanningGesture
            backgroundStyle={{backgroundColor: theme.PRIMARY_BACKGROUND_COLOR}}
            handleIndicatorStyle={{backgroundColor: theme.SECONDARY_BACKGROUND_COLOR}}
            >
            <BottomSheetFlatList
                style={{backgroundColor: theme.PRIMARY_BACKGROUND_COLOR}}
                data={themes}
                keyExtractor={(i) => i.name}
                renderItem={({item}) => <ThemePickerItem updateTheme={updateTheme} theme={item}/>}
                ItemSeparatorComponent={()=><Separator/>}
            />
        </ThemesDrawer>
  )
})

const ThemesDrawer = styled(BottomSheet)`
    margin: 15px;
    padding: 15px;
    ${softShadow};
    shadowColor: ${props => props.theme.SECONDARY_BACKGROUND_COLOR}
`

const Separator = styled.View`
    height: 1px;
    width: 100%;
    backgroundColor: ${props => props.theme.SECONDARY_BACKGROUND_COLOR}18;
`
export default ThemePicker;